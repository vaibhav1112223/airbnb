const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const User=require("./user")


const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type:String,
  required: true} ,
  image: {
    filename: String,
    url: String
  },
  price:{type: Number,
     required: true},

  location:{type: String,
     required: true},
  country:{type: String,
     required: true},
     reviews:[{
      type:Schema.Types.ObjectId,
      ref:"Review",

     }],
     owner:{
     type:Schema.Types.ObjectId,
      ref:"User"
     },
       latitude: Number,
  longitude: Number
  
});
   listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
       console.log(listing)
await review.deleteMany({_id:{$in:listing.reviews}})}

 })


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;