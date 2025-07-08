const Listing=require("../models/listing.js");
module.exports.index=async(req,res)=>{
  const allListings=await Listing.find({});
 res.render("listings/index.ejs",{allListings});
}
module.exports.new=(req,res)=>{
  
    res.render("listings/new.ejs");
}
module.exports.show=async(req,res)=>{
    let {id}=req.params
    const listing=await Listing.findById(id).populate({path:"reviews",
        populate:{
        path:"author"
    }}).populate("owner")
    if(!listing){
        req.flash("error","listing you requested does not exist.")
        res.redirect("/listings")
    }
   // console.log(listing)
    res.render("listings/show.ejs",{listing})
}
const axios = require('axios');

module.exports.create = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  console.log(url, "..", filename);

  const newlisting = new Listing(req.body.listing);
  newlisting.owner = req.user._id;
  newlisting.image = { url, filename };

  // ✅ Get Coordinates using Nominatim
  const location = req.body.listing.location; // Assuming 'location' is part of your form
  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: location,
        format: 'json',
        limit: 1
      }
    });

    if (response.data.length > 0) {
      newlisting.latitude = response.data[0].lat;
      newlisting.longitude = response.data[0].lon;
    } else {
      newlisting.latitude = 0;
      newlisting.longitude = 0;
    }
  } catch (error) {
    console.error("Geocoding error:", error);
    newlisting.latitude = 0;
    newlisting.longitude = 0;
  }

  await newlisting.save();
  req.flash("success", "New listing created");
  res.redirect("/listings");
};
    module.exports.edit=async (req,res)=>{
    let {id}=req.params
    const listing=await Listing.findById(id)
     if(!listing){
        req.flash("error","listing you requested does not exist.")
        res.redirect("/listings")
    }
    //let originalimage=listing.image.url
   // console.log(originalimage)
   // originalimage.replace("/upload/", "/upload/w_25/")
    res.render("listings/edit.ejs",{listing})
}
module.exports.update=async(req,res)=>{
    let {id}=req.params;
   let listing= await Listing.findByIdAndUpdate(id,{...req.body.listing})
   let url=req.file.path
 //  console.log(url)
   if(typeof req.file !== "undefined"){
let filename=req.file.filename
listing.image={url,filename}
await listing.save()}
    res.redirect(`/listings/${id}`)
}
module.exports.delete=async(req,res)=>{
    let{id}=req.params
    await Listing.findByIdAndDelete(id)
    req.flash("success","new listing deleted")
    res.redirect("/listings")
}