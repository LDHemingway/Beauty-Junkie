const Schema = require('mongoose').Schema



const ProductSchema = new Schema ({
    brandName: String,
    productName: String,
    description: String,
    image: String,
    price: String,
    link: String
})

const RegionSchema = new Schema ({
    name: String,
    image: String,
    products: [ProductSchema]
})
module.exports = {
    RegionSchema,
    ProductSchema
}