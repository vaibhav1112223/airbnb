const Listing=require("./models/listing.js")
const review=require("./models/review.js")
module.exports.isLoggedIn=
(req,res,next)=>{
    //console.log(req.path, "..", req.originalUrl)
        
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl
         req.flash("error","you must be logged in first") 
         return res.redirect("/login")
    }
    next()
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl

    }
    next()
}

module.exports.isOwner=async(req,res,next)=>{
 let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currentuser._id)){
req.flash("error", "you dont have permission to eedit")
  return res.redirect(`/listings/${id}`)
    }
    next()
}

module.exports.isReviewAuthor=async(req,res,next)=>{
     let {id,reviewId}=req.params;
    let Review=await review.findById(reviewId);
    if(!Review.author._id.equals(res.locals.currentuser._id)){
req.flash("error", "you are not author to delete this review")
  return res.redirect(`/listings/${id}`)
    }
    next()
}
