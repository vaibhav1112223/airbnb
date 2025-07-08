const Joi = require('joi');
module.exports.listingchema = Joi.object({
    listing: Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        country:Joi.string().required(),
        price:Joi.number().required().min(10),
        image:Joi.string().allow("",null)
    }).required()
        
})

// const Joi = require("joi");

// const listingchema = Joi.object({ /* ... */ });

// module.exports = {
//   listingchema: listingchema
// };

module.exports.reviewSchema=Joi.object({
    review:Joi.object({
    rating:Joi.number().required().min(1).max(5),
    Comment:Joi.string().required()
    }).required()
})