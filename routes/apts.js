var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Apt = require('../models/Apts');

router.get('/:aptId', function(req, res, next){
  Apt.find({_id: req.params.aptId}, function(err, data){
    if (err){
      res.send('Error: ', err);
    }
    else{
      res.send(data);
    }
  })
});

router.get('/', function(req, res, next){
  Apt.find({}, function(err, data){
    if(err){
      console.log('if')
      res.send('Error: ', err);
    } else{
      console.log('else')
      res.send(data);
    }
  })
});


router.post('/', function(req, res, next){
  Apt.create(req.body, function(err){
    if (err) {
      res.status(400).send(err);
    }
    else{
      res.send('Apartment Created!');
    }
  });

});

module.exports = router;
