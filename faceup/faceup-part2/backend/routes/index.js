var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary').v2;

const fs = require('fs')
var uniqid = require('uniqid');

cloudinary.config({ 
  cloud_name: 'dcpes7e7v', 
  api_key: '166523837126846', 
  api_secret: 'RtH2POjUrOPh0OFMHM3jKmgv08E' 
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/upload',async function(req, res, next) {
  console.log("monconsole",req.files.avatar)
  var pictureName = './tmp/'+uniqid()+'.jpg'
  var resultCopy = await req.files.avatar.mv(pictureName);
  //console.log(resultCopy)
  if(!resultCopy) {

    var fileUploaded = await cloudinary.uploader.upload(pictureName,
    {"crop":"limit","tags":"samples","width":3000,"height":2000});

    res.json({result: true, fileUploaded} );
    console.log('ça fonctionnne')       
  } else {
    res.json({result: false, message: resultCopy} );
  }
  fs.unlinkSync(pictureName);
});


module.exports = router;
