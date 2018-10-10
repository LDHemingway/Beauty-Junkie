var express = require('express');
var router = express.Router();
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
  await Product.findByIdAndRemove(req.params.id)
  res.sendStatus(200)
})



module.exports = router;
