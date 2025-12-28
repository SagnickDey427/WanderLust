const mongoose  = require('mongoose');
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL  = "mongodb://127.0.0.1:27017/wanderlust";
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage});

main().then(()=>{
    console.log("Connected to DB successfully.");
}).catch(err=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"694a39209b6d755ff9653efe"}));
    await Listing.insertMany(initData.data);
    
    console.log("DB initialised with data successfully.");
}

initDB();