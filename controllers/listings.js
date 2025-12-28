const Listing= require("../models/listing.js");
const ExpressError = require("../utils/expressError.js");
const maptilerClient = require("@maptiler/client"); //Maptiler client for geocoding
const mapToken = process.env.MAP_API_KEY;
maptilerClient.config.apiKey = mapToken;

module.exports.index = async (req,res)=>{
    const listings = await Listing.find({});
    res.render("listings/index.ejs",{listings});
}

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"createdBy"}}).populate("owner");
    if(!listing){
        req.flash("error", "No listing found.");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
}

module.exports.editListing = async (req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "No listing found.");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/w_300");
    res.render("listings/edit.ejs",{listing,originalImageUrl});
}

module.exports.updateListing = async (req,res)=>{
    if(!req.body.listing) throw new ExpressError(400,"Send valid listing data");
    const {id} = req.params;
    const listing = await Listing.findByIdAndUpdate(id,{...req.body.listing},{runValidators:true});
    
    if(typeof req.file !== "undefined"){ //If user doesn't uploads any new image , then req.file will be undefined
        const url = req.file.url;
        const filename = req.file.filename;
        listing.image = {url,filename};
        await listing.save();
    }
    console.log("Updated sucessfully 👍🏻 !");
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req,res)=>{
    const {id} = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
}

module.exports.createNewListing = async (req,res)=>{
    const result = await maptilerClient.geocoding.forward(req.body.listing.location,{
        limit : 1,
    });


    const url = req.file.path;
    const filename = req.file.filename;
    const newListing = await Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    newListing.geometry = result.features[0].geometry;
    await newListing.save();

    req.flash("success","New listing added!");
    res.redirect("/listings");
}


module.exports.filterListings = async (req,res)=>{
    let {filterCateg} = req.params;
    let listings = await Listing.find({category : filterCateg});
    console.log(listings);
    let selectedCateg = filterCateg;
    res.render("listings/index.ejs",{listings,selectedCateg});
}

module.exports.searchListings = async (req,res)=>{
    let {searchDest} = req.body;
    let parts = searchDest.trim().split(/\s+|,/); // Split by space or comma

    // Create an array of conditions for every word typed
    let conditions = parts.map(part => ({
        $or: [
            { location: { $regex: part, $options: "i" } },
            { country: { $regex: part, $options: "i" } },
            { title: { $regex: part, $options: "i" } } // Bonus: search titles too
        ]
    }));

    // Find listings that match ALL parts of the search string
    let results = await Listing.find({ $and: conditions });
    console.log(results);

    res.render("listings/index.ejs", { listings: results });

}