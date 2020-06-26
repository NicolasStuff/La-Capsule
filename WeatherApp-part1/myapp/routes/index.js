var express = require('express');
var router = express.Router();

var cityList = [
  {name:"Paris", url:"/images/picto-1.png", description:'nuageux', tempMin: "7", tempMax: "16"},
  {name:"lyon", url:"/images/picto-1.png", description:'nuageux', tempMin: "7", tempMax: "16"},
  {name:"Marseille", url:"/images/picto-1.png", description:'nuageux', tempMin: "7", tempMax: "16"},
  {name:"Strasbourg", url:"/images/picto-1.png", description:'nuageux', tempMin: "7", tempMax: "16"},
  {name:"Montpellier", url:"/images/picto-1.png", description:'nuageux', tempMin: "7", tempMax: "16"},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather', function(req, res, next) {
  res.render('weather', { cityList: cityList });
});

router.post('/add-city', function(req, res, next) {
  res.render('weather', {cityList: cityList });
})

module.exports = router;
