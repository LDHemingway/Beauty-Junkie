var express = require('express');
var router = express.Router({mergeParams: true});
const { Region, Product } = require('../db/Model')

/* GET users listing. */
router.get('/', function(req, res,) {
  res.send('respond with a resource');
});


router.post('/', async (req, res) => {
  console.log('hello this is post')
  const region = await Region.findById(req.params.regionId)
  const newProduct = new Product(req.body)
  region.products.push(newProduct)
  const product = await region.save()
  res.send(product)
})

router.delete('/:id', async(req, res) => {
  const region = await Region.findById(req.params.regionId)
  region.products.id(req.params.id).remove()
  await region.save()
  res.send(200)
  res.send(region)
})

router.put('/:id', (req, res) => {
  Region.findById(req.params.regionId)
    .then(region => {
      const product = region.products.id(req.params.id)
      const newProduct = req.body
      if (newProduct.brandName) {
        product.brandName = newProduct.brandName
      }
      if (newProduct.productName) {
        product.productName = newProduct.productName
      }
      if (newProduct.description) {
        product.description = newProduct.description
      }
      if (newProduct.image) {
        product.image = newProduct.image
      }
      if (newProduct.price) {
        product.price = newProduct.price
      }
      if (newProduct.link) {
        product.link = newProduct.link
      }
      return region.save()
    })
    .then(region => {
      res.send(region)
    })
})



module.exports = router;
