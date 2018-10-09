var express = require('express');
var router = express.Router();
const { Region } = require('../db/Model')

/* GET home page. */
router.get('/', async(req, res) => {
  const regions = await Region.find()
  res.send(regions)
})

router.get('/:id', async(req, res) => {
  const region = await Region.findById(req.params.id)
  res.send(region)
})

router.post('/', async (req, res) => {
  const region = await Region.create(req.body)
  res.send(region)
})

router.delete('/:id', async(req, res) => {
  await Region.findByIdAndRemove(req.params.id)
  res.sendStatus(200)
})

module.exports = router;
