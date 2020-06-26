var express = require('express');
var router = express.Router();

var dataBike = [{
  image: "./images/bike-1.jpg",
  modele: "BIK045",
  prix: "679€",
}, {
  image: "./images/bike-2.jpg",
  modele: "ZOOK07",
  prix: "999€",
}, {
  image: "./images/bike-3.jpg",
  modele: "TITANS",
  prix: "799€",
}, {
  image: "./images/bike-4.jpg",
  modele: "CEWO",
  prix: "1300€",
}, {
  image: "./images/bike-5.jpg",
  modele: "AWIG39",
  prix: "479€",
}, {
  image: "./images/bike-6.jpg",
  modele: "LIKO99",
  prix: "869€",
}]

var dataCardBike = [{
  image: "./images/bike-1.jpg",
  modele: "BIK045",
  prix: 679,
}, {
  image: "./images/bike-2.jpg",
  modele: "ZOOK07",
  prix: 999,
}, {
  image: "./images/bike-3.jpg",
  modele: "TITANS",
  prix: 799,
}, {
  image: "./images/bike-4.jpg",
  modele: "CEWO",
  prix: 1300,
}, {
  image: "./images/bike-5.jpg",
  modele: "AWIG39",
  prix: 479,
}, {
  image: "./images/bike-6.jpg",
  modele: "LIKO99",
  prix: 869,
}]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BikeShop', dataBike: dataBike });
});

router.get('/index', function(req, res, next) {
  res.render('index', { dataBike: dataBike });
});

router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'BikeShop', dataCardBike: dataCardBike });
});

module.exports = router;

