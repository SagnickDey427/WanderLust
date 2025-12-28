//Env variables from .env using dotnet
if(process.env.NODE_ENV != 'production'){
    require("dotenv").config() 
}

//📌 Require and declaration site
const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate');
const ExpressError = require("./utils/expressError.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const session = require("express-session");
const MongoStore = require('connect-mongo').default;
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");




app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views")); //For ejs files
app.use(express.urlencoded({extended:true})); //Handling post req data in urlencoded format 
app.use(express.json()); //Handling post req data in json format
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public/styles")));
app.use(express.static(path.join(__dirname,"/public/scripts")));


//📌 Establishing connection with DB
const dbUrl = process.env.ATLASDB_URL;

main().then(()=>{
    console.log("Connected to DB successfully.");
}).catch(err=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(dbUrl);
}
console.log("MongoStore Type:", typeof MongoStore.create);
//Defining store
const store = MongoStore.create({
    mongoUrl :  dbUrl,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter:24*3600,
})

store.on("error",(err)=>{
    console.log("Soem error occured with mongo session store",err);
})


//Defining sessions
const sessionOptions ={
    store:store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie:{
        expires: Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true
    }
} 
//📌 Defining route
app.get("/",(req,res)=>{
    res.redirect("/listings");
})
app.use(session(sessionOptions));



//Using flash 
app.use(flash());


//🛂 Using passport
app.use(passport.initialize()); //Initialising the passport object
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); //Tells passport object to use built-in authenticate() method of user model to login users using username/password method.
passport.serializeUser(User.serializeUser()); //Add the user details in user's curent session
passport.deserializeUser(User.deserializeUser()); //Remove the user details from the session


app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})




//Router for /listings
app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);


app.get('/favicon.ico', (req, res) => res.status(204).end());

// Place this before your app.all("*", ...) 404 handler
app.get("/.well-known/appspecific/com.chrome.devtools.json", (req, res) => {
  res.status(204).end(); // 204 means "No Content" - tells Chrome it's okay but nothing is here
});

//⚠️ If a req is sent to any non-existing Route (not matching with any of the above routes), then we will raise this error , * refers to any arbitary path string 
app.all("{*any}",(req,res,next)=>{
    console.log("404 triggered by:", req.originalUrl);
    next(new ExpressError(404,"Page not found :( "));
})
 

//📌📌 Error handling middleware
app.use((err,req,res,next)=>{
    const {status=500,message="Something went wrong!"} = err;
    console.log(err);

    res.status(status).render("listings/error.ejs",{err});

})


app.listen(port,()=>{
    console.log(`Listening to port : ${port}`);
})


