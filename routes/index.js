const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', data: 0 })
})

router.post('/', function (req, res, next) {
  const item = req.body.item
  res.render('index', { title: 'Express', data: item })
})

module.exports = router
