var express = require('express');
var router = express.Router();

var cityList = [
  { name: "Paris", description: 'nuageux', url: '/images/picto-1.png', tempMax: "25", tempMin: '12'},
  {name: "Marseile", description: 'nuageux', url: '/images/picto-1.png', tempMax: "25", tempMin: '12'},
  {name: "Montpellier", description: 'nuageux', url: '/images/picto-1.png', tempMax: "25", tempMin: '12'},
  {name: "Strasbourg", description: 'nuageux', url: '/images/picto-1.png', tempMax: "25", tempMin: '12'},
  {name: "Lyon", description: 'nuageux', url: '/images/picto-1.png', tempMax: "25", tempMin: '12'},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather', function(req, res, next) {
  res.render("weather", {cityList});
})

router.post('/add-list', function(req, res, next) {
  
  var alreadyExit = false;

  for(var i = 0; i < cityList.length; i++) {
    if(req.body.newcity.toLowerCase() == cityList[i].name.toLowerCase()) {
      alreadyExit = true;
    }
  }

  if(alreadyExit == false) {
    cityList.push({
      name: req.body.newcity,
      description: 'nuageux',
      url: '/images/picto-1.png',
      tempMax: "25",
      tempMin: '12',
    })
  }
  
  res.render('weather', {cityList})
})

router.get('/delete-city', function(req, res, next) {
  cityList.splice(req.query.position, 1)

  res.render("weather", {cityList});
})



module.exports = router;
