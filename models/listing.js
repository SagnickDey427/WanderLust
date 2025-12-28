const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./reviews.js");


const listingSchema  = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    price:{
        type:Number
    },
    image:{
        url : String,
        filename : String
    },
    location:String,
    country:String,
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:"Review"
    }],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    geometry:{
        type:{
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates:{
            type: [Number],
            required: true
        }
    },
    category:{
        type:String,
        enum:["Trending","Beach","Mountains","Snow","Rooms","Iconic cities","Luxury","Amazing view","Spa","Boating","Pools"],
    }
})


//Defining post middleware
listingSchema.post("findOneAndDelete",async (listing)=>{
    if(listing && listing.reviews.length > 0){
        let res = await Review.deleteMany({ _id : {$in : listing.reviews} });
        console.log("Deleted reviews:", res);
    }
})

const Listing = mongoose.model("Listing",listingSchema);


module.exports = Listing;