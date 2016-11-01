var router = require('express').Router()
var db = require('../config/database')

router.get('/', function (req, res, next){
var carsColl = db.get('cars')
carsColl.find({}, function (err, cars){
    res.render("cars/index", {cars: cars})
})
})

router.get('/new', function (req, res) {
  res.render('cars/new');
})

router.post('/', function (req, res) {
  var carsColl = db.get('cars')
  carsColl.insert(req.body, function (err, car){
      res.redirect('/cars');
  })
});

router.get("/:id", function (req, res){
  var carsColl = db.get('cars')

  carsColl.findOne({_id: req.params.id}, function (err, car){
    res.render('cars/show', {car: car})
  })
})

module.exports = router
