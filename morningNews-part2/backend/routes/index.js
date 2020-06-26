var express = require('express');
var router = express.Router();
var UserModel = require('../model/UserSchema')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign-up', async function (req, res, next) {
  var searchUser = await UserModel.findOne({
    email: req.body.emailFromFront
  })
  if(!searchUser){
    var newUser = new UserModel({
      username: req.body.usernameFromFront,
      email: req.body.emailFromFront,
      password: req.body.passwordFromFront,
    })

    var newUserSave = await newUser.save();

    res.json({result: false, newUserSave});
  } else {
    res.json({result: true, searchUser});
  }
})
router.post('/sign-in', async function (req, res, next) {

  var searchUser = await UserModel.findOne({
    email: req.body.emailFromFront,
    password: req.body.passwordFromFront,
  })
  //console.log(searchUser)
  if(searchUser!= null){
    res.json({result: true, searchUser});
  } else {
    res.json({result: false});
  }
})

module.exports = router;
