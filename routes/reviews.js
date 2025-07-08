const express=require("express")
const router = express.Router({ mergeParams: true })
const Listing=require("../models/listing.js");
const review=require("../models/review.js")
const wrapasync=require("../utils/wrapasync.js")
const Expresserror=require("../utils/expresserror.js")
const {reviewSchema}=require("../schema.js")
const { isLoggedIn, saveRedirectUrl,isReviewAuthor } = require("../middleware.js")

const reviewController=require("../controller/reviews.js")





const validatereview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body); 
 if(error){
    let errmsg=error.details.map((el)=>{return el.message}).join()
    throw new Expresserror(403,errmsg)
    
 }  else{
    next()
 }

}

router.post("/",isLoggedIn,validatereview ,wrapasync(reviewController.createReview))
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapasync(reviewController.deleteReview))
module.exports=router