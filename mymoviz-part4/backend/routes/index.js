var express = require('express');
var router = express.Router();
var request = require('sync-request');

var movieModel = require('../models/movies')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('index', { title: 'Express'});
});

router.get('/new-movies', function (req, res, next){

  var data = request("GET", `https://api.themoviedb.org/3/discover/movie?api_key=b84bc64caa76ddb12aa31f04e872decb&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
  var dataAPI = JSON.parse(data.body)
  console.log(dataAPI)
  res.json({dataAPI})
})

router.post('/wishlist-movie',async function (req, res, next) {
  console.log(req.body)

  var movieUser = new movieModel({
    name: req.body.name,
    image: req.body.image
  })
  var newmovieUser = await movieUser.save();

  res.json({newmovieUser})
})

router.delete('/wishlist-movie', async function(req, res, next) {

  var movieUser = await movieModel.findOne({
    name: req.body.name,
  })

  var newmovieUser = await movieUser.deleteOne();

  console.log(newmovieUser)

  res.json({newmovieUser});
});

router.get('/wishlist-movie', async function (req, res, next) {
  
  var movieUser = await movieModel.findOne({
    name: req.body.name,
  })

  console.log(movieUser)

  res.json({movieUser})

})

module.exports = router;
