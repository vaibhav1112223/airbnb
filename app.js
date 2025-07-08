if(process.env.NODE_ENV != "production"){
   require('dotenv').config()
}


console.log(process.env.SECRET) 
const express=require("express")
const app=express()
const mongoose=require("mongoose")
//const Listing=require("./models/listing.js");
const path=require("path");
const methodOverride=require("method-override")
const ejsMate=require("ejs-mate")
//const wrapasync=require("./utils/wrapasync.js")
const Expresserror=require("./utils/expresserror.js")
//const {listingchema,reviewSchema}=require("./schema.js")   
//const review=require("./models/review.js")
const listings=require("./routes/listing.js")
const reviews=require("./routes/reviews.js")
const session=require("express-session");
const MongoStore = require('connect-mongo');
const { date } = require("joi");
const flash=require("connect-flash")
const passport=require("passport")
const LocalStrategy=require("passport-local")
const User=require("./models/user.js")
const userrouter=require("./routes/user.js")
const axios = require('axios');



app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname, "/public")))
const dburl=process.env.ATLASDB_URL
main()
.then(()=>{
    console.log("conneccted to db")
})
.catch((err)=>{
    console.log(err)
})
async function main() {
    await mongoose.connect(dburl);
}


const store = MongoStore.create({
  mongoUrl: dburl,
  secret: process.env.SECRET,
  touchAfter: 24 * 3600
});

store.on("error",()=>{
console.log("error in ssion store")
} )


const sessionoption={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*1000,
        maxAge:7*24*60*100,
        httpOnly:true
    }
};

app.use(session(sessionoption))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());





app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req,res,next)=>{
    res.locals.success=(req.flash("success"))
    res.locals.errors=(req.flash("error"))
    res.locals.currentuser=req.user
    
    next()
})

app.use("/listings",listings)
app.use("/listings/:id/reviews",reviews)
app.use("/",userrouter)

// app.get("/",(req,res)=>{
//     res.send("i m root")
// })





// app.all("*",(req,res,next)=>{
//     next(new Expresserror(503, "page not found"))
// })
app.use((err,req,res,next)=>{
    let{statuscode=404,message="something went wrong"}=err;
   // res.status(statuscode).send(message)
   console.log(err)
res.render("error.ejs",{err})
    //res.send("something went wrong")
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

