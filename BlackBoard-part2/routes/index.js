var express = require('express');
var router = express.Router();

var articleModel = require('../models/articles')
var orderModel = require('../models/orders')
var UserModel = require('../models/users')

var usersSend= [];
var messsagesFiltered= [];
var tasksFiltered = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET tasks page. */
router.get('/tasks-page',async function(req, res, next) {
  var users = await UserModel.findById('5c52e4efaa4beef85aad5e52');

  for(var i = 0; i < users.tasks.length; i++) {
    tasksFiltered.push(users.tasks[i])
  }
  console.log(tasksFiltered)

  res.render('tasks', {tasksFiltered});
});

/* GET Messages page. */
router.get('/messages-page',async function(req, res, next) {
  var users = await UserModel.findById('5c52e4efaa4beef85aad5e52');
  console.log(users)
  for(var i = 0; i < users.messages.length; i++) {
    messsagesFiltered.push(users.messages[i])
  }
  console.log(messsagesFiltered)
  res.render('messages', {messsagesFiltered});
});

/* GET Users page. */
router.get('/users-page',async function(req, res, next) {

  var users = await UserModel.find();
  //console.log(users);
  for(var i = 0; i < users.length; i++) {
    if(users[i].status === 'customer') {
      usersSend.push(users[i])
    }
  }
  console.log(usersSend)
  res.render('users', {usersSend});
});

/* GET Catalog page. */
router.get('/catalog-page', async function(req, res, next) {

  var articles = await articleModel.find();

  res.render('catalog', {articles});
});

/* GET Orders-list page. */
router.get('/orders-list-page', async function(req, res, next) {

  var orders = await orderModel.find();
  
  res.render('orders-list', {orders});
});

/* GET Order detail page. */
router.get('/order-page', async function(req, res, next) {

  var order = await orderModel.findById(req.query.id)
                              .populate('articles')
                              .exec()

  res.render('order', {order});
});

/* GET chart page. */
router.get('/charts', function(req, res, next) {
  res.render('charts');
});



module.exports = router;
