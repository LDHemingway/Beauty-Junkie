const mongoose = require('mongoose')
const {RegionSchema, ProductSchema} = require('./Schema')

const RegionModel = mongoose.model('Region', RegionSchema)
const ProductModel = mongoose.model('Product', ProductSchema)

module.exports = {
    Region: RegionModel,
    Product: ProductModel
}