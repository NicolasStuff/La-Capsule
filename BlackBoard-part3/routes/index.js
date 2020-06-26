var express = require('express');
var router = express.Router();

var articleModel = require('../models/articles')
var orderModel = require('../models/orders')
var userModel = require('../models/users')

/* GET home page. */
router.get('/', async function(req, res, next) {

  var emptyStocks = await articleModel.find({stock:0})

  var user = await userModel.findById('5c52e4efaa4beef85aad5e52');
  var messages = user.messages;
  
  var unreadMessages = 0;
  var readMessages = 0;
  for(var i=0;i<messages.length;i++){
    if(messages[i].read == false){
      unreadMessages +=1
    } else {
      readMessages += 1;
    }
  }

  var taches = user.tasks;
  var taskInprogress = 0

  for(var i=0;i<taches.length;i++){
    if(taches[i].dateCloture == null){
      taskInprogress +=1;
    }
  }

  res.render('index',{emptyStocks:emptyStocks.length,unreadMessages,taskInprogress});
});

/* GET tasks page. */
router.get('/tasks-page', async function(req, res, next) {

  var user = await userModel.findById('5c52e4efaa4beef85aad5e52');
  res.render('tasks', {taches: user.tasks});
});

/* GET Messages page. */
router.get('/messages-page', async function(req, res, next) {

  var user = await userModel.findById('5c52e4efaa4beef85aad5e52');

  res.render('messages', {messages: user.messages});
});

/* GET Users page. */
router.get('/users-page', async function(req, res, next) {

  var users = await userModel.find({status: "customer"});

  res.render('users', {users});
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
router.get('/charts', async function(req, res, next) {

  var charts = await userModel.find({status: "customer"});
  //console.log(charts);
  var female = 0;
  var male = 0;
  for(var i = 0; i < charts.length; i++) {
    if(charts[i].gender === 'female') {
      female = female + 1;
    } else {
      male = male + 1;
    }
  }
  var user = await userModel.findById('5c52e4efaa4beef85aad5e52');
  var messages = user.messages;
  
  var unreadMessages = 0;
  var readMessages = 0;
  for(var i=0;i<messages.length;i++){
    if(messages[i].read == false){
      unreadMessages += 1
    } else {
      readMessages += 1;
    }
  }
  //console.log(unreadMessages, readMessages)

  var orders = await orderModel.find();
  console.log(orders)
  var commandvalid = 0;
  var commandunvalid = 0;
  for(var i=0;i<orders.length;i++){
    if(orders[i].status_payment == "validated"){
      commandvalid += 1
    } else if (orders[i].status_payment == "refused"){
      commandunvalid += 1;
    } else {
      commandWaiting += 1;
    }
  }
  console.log(commandvalid, commandunvalid)
  res.render('charts', {female, male, readMessages, unreadMessages, commandunvalid, commandvalid, commandwaiting });
});

module.exports = router;
