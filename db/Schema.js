const Schema = require('mongoose').Schema

const RegionSchema = new Schema ({
    name: String,
    image: String,
    products: []
})

const ProductSchema = new Schema ({
    brandName: String,
    productName: String,
    description: String,
    image: String,
    price: String,
    link: String
})

module.exports = {
    RegionSchema,
    ProductSchema
}