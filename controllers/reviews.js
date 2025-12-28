const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");

module.exports.createReview = async (req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let review = new Review(req.body.review);
    review.createdBy = req.user._id;
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    console.log(review);
    req.flash("success", "New Review added successfully!");
    res.redirect(`/listings/${req.params.id}`);

}

module.exports.deleteReview = async (req,res)=>{
    const {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted successfully!");
    res.redirect(`/listings/${id}`);

}