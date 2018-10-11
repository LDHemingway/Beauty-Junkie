var express = require('express');
var router = express.Router({mergeParams: true});
const { Region, Product } = require('../db/Model')

/* GET users listing. */
router.get('/', function(req, res,) {
  res.send('respond with a resource');
});

// router.post('/', (req, res) => {
//   const newProduct = new Product()
//   Region.findById(req.params.regionId)
//   .then((region) => {
//     region.products.push(newProduct)
//     return region.save()
//   })
// })

router.post('/', async (req, res) => {
  const newProduct = new Product(req.body)
  const product = await newProduct.save()
  res.send(product)
})

router.delete('/:id', async(req, res) => {
  const region = await Region.findById(req.params.regionId)
  region.products.id(req.params.id).remove()
  await region.save()
  res.send(200)
})



module.exports = router;
