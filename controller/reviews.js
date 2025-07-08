const Listing=require("../models/listing.js");
const review=require("../models/review.js")

module.exports.createReview=async(req,res)=>{
   let listing=await Listing.findById(req.params.id)
   let newreview=new review(req.body.review)
   newreview.author=req.user._id;
   listing.reviews.push(newreview)
   await newreview.save()
   await listing.save()
   req.flash("success","new review added")
   res.redirect(`/listings/${listing._id}`)
}
module.exports.deleteReview=async(req,res)=>{
    let {id,reviewId}=req.params
//    let result= await review.findById(reviewId)
//    console.log(result)
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await review.findByIdAndDelete(reviewId)
    req.flash("success","review deleted")
    res.redirect(`/listings/${id}`)

}