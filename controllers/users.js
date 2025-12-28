const User = require("../models/user.js");

module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.createUser = async (req,res,next)=>{
    try{

        const  {username, email, password} = req.body;
        const newUser = new User({username,email});
        const registeredUser = await User.register(newUser,password);
        console.log(registeredUser);
        req.logIn(registeredUser,(err)=>{
            if(err){
                next(err);
            } else{
                req.flash("success", "Welcome to Wanderlust");
                res.redirect("/listings");
            }
        })
        
    } catch(er){
        console.log(er.message);
        req.flash("error",er.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs");
}

module.exports.authenticateUser = async (req,res)=>{
    const redirectingUrl = res.locals.redirectUrl || "/listings";
    req.flash("success","Welcome back to WanderLust!");
    res.redirect(redirectingUrl);
}

module.exports.logOutUser=(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
            next(err);
        } else{
            req.flash("success","You are logged out.");
            res.redirect("/listings");
        }
    })
}