const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");
const {reviewValidation, isLoggedIn, isReviewAuthor} = require("../middlewares.js");
const reviewController = require("../controllers/reviews.js");

//🗺️ Reviews route 
//Post req
router.post("/",isLoggedIn,reviewValidation, wrapAsync(reviewController.createReview))
//Delete req
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.deleteReview));


module.exports = router;