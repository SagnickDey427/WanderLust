const Listing = require("./models/listing.js");
const Review = require("./models/reviews.js");
const ExpressError = require("./utils/expressError.js");
const {listingsSchema , reviewSchema} = require("./schemaValid.js");

module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl= req.originalUrl;
        req.flash("error","You must be logged in first !");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();

}

module.exports.isOwner = async (req,res,next)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this listing.");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.listingValidation = (req,res,next)=>{
    const {error} = listingsSchema.validate(req.body);
    

    if(error){
        const errMsg = error.details.map((el)=>el.message).join(",");
        console.log(errMsg);
        throw new ExpressError(400,errMsg);
    } else{
        next();
    }
}

module.exports.reviewValidation = (req,res,next)=>{
    const {error} = reviewSchema.validate(req.body);

    // const errMsg = error.details.map((el)=>el.message).join(",");
    // console.log(errMsg);

    if(error){
        const {error} = listingsSchema.validate(req.body);
        const errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    } else{
        next();
    }
}


module.exports.isReviewAuthor = async (req,res,next)=>{
    const {id,reviewId} = req.params;
    const review = await Review.findById(reviewId);
    if(!review.createdBy._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this review.");
        return res.redirect(`/listings/${id}`);
    }
    next();
}