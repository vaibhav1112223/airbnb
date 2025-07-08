const express=require("express")
const router=express.Router()
const Listing=require("../models/listing.js");

const wrapasync=require("../utils/wrapasync.js")
const {listingchema}=require("../schema.js")
const Expresserror=require("../utils/expresserror.js");
const { isLoggedIn,isOwner } = require("../middleware.js");
// const {isLoggedIn}=require("../middleware.js")
const listingController=require("../controller/listings.js")
const multer  = require('multer')
const {storage}=require("../cloudconfig.js")
const upload = multer({ storage})
const axios = require('axios');
const validatelisting=(req,res,next)=>{
    let {error}= listingchema.validate(req.body); 
 if(error){
    let errmsg=error.details.map((el)=>{return el.message}).join()
    throw new Expresserror(403,errmsg)
    
 }  
 next()

}
router.route("/")
.get(wrapasync( listingController.index))
// .post(upload.single('listing[image]'),(req,res)=>{
//    res.send(req.file)
// })
.post(isLoggedIn,upload.single('listing[image]'),validatelisting, wrapasync(listingController.create));



//new route
router.get("/new",isLoggedIn,listingController.new)


router.route("/:id")
.get(wrapasync(listingController.show))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validatelisting,wrapasync(listingController.update))
.delete(isLoggedIn,isOwner,wrapasync(listingController.delete))

//edit route
router.get("/:id/edit",isLoggedIn,wrapasync(listingController.edit))


module.exports=router
