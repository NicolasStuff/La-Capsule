var express = require('express');
var router = express.Router();
var articlesmodel = require('../model/articles')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET tasks page. */
router.get('/tasks-page', function(req, res, next) {
  res.render('tasks');
});

/* GET Messages page. */
router.get('/messages-page', function(req, res, next) {
  res.render('messages');
});

/* GET Users page. */
router.get('/users-page', function(req, res, next) {
  res.render('users');
});

/* GET Catalog page. */
router.get('/catalog-page', async function(req, res, next) {
  var catalogue = await articlesmodel.find(
    console.log(catalogue)
  )
  res.render('catalog', {catalogue});
});

/* GET Orders-list page. */
router.get('/orders-list-page', function(req, res, next) {
  res.render('orders-list');
});

/* GET Order detail page. */
router.get('/order-page', function(req, res, next) {
  res.render('order');
});

/* GET chart page. */
router.get('/charts', function(req, res, next) {
  res.render('charts');
});



module.exports = router;
