var express = require('express');
var router = express.Router();

var dataBike = [
  {name:"BIK045", url:"/images/bike-1.jpg", price:679},
  {name:"ZOOK07", url:"/images/bike-2.jpg", price:999},
  {name:"TITANS", url:"/images/bike-3.jpg", price:799},
  {name:"CEWO", url:"/images/bike-4.jpg", price:1300},
  {name:"AMIG039", url:"/images/bike-5.jpg", price:479},
  {name:"LIK099", url:"/images/bike-6.jpg", price:869},
]

var dataCardBike = []
//console.log('var 1' +dataCardBike);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {dataBike:dataBike});
});

router.get('/shop', function(req, res, next) {
  //console.log(req.query);
  
  dataCardBike.push({
    name:req.query.name,
    url:req.query.url,
    price:parseInt(req.query.price)
  });
  
  //console.log(dataCardBike)
  res.render('shop', {dataCardBike:dataCardBike});

});

router.get('/delete-shop', function(req, res, next) {
  console.log("coucou", req.query)
  res.render('shop', {dataCardBike:dataCardBike})
});

module.exports = router;
