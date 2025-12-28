const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, listingValidation } = require("../middlewares.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage});

//Controllers
const listingController = require("../controllers/listings.js");

//🗺️ Index route and post req of create route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(isLoggedIn,upload.single('listing[image]'),listingValidation, wrapAsync(listingController.createNewListing));

//🗺️ Create route get req
router.get("/new", isLoggedIn, listingController.renderNewForm);

//🗺️ Search route
router.post("/search",listingController.searchListings);

//🗺️ Filters route
router.get("/filters/:filterCateg",isLoggedIn, listingController.filterListings)

//🗺️ Show route , update route and delete route
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(isLoggedIn, isOwner,upload.single('listing[image]'),listingValidation, wrapAsync(listingController.updateListing))
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

//🗺️ Edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListing)
);

module.exports = router;
