var express = require('express');
var router = express.Router();
const { Region } = require('../db/Model')

/* GET home page. */
router.get('/', async(req, res) => {
  const region = await Region.find()
  res.send(regions)
})

module.exports = router;
