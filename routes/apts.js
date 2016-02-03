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
    // if this route is for a detailed show page for the apartment,
    //you can use populate here to fill in details about the 
    // schemas for the docuements you referenced in the apt schema
  })//.populate('rooms tenants');
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


//post new apt
router.post('/new', function(req, res){
  var newApt = req.body;
  newApt = new Apt;
  newApt.name = newApt.name;
  newApt.vacantRooms = newApt.vacantRooms;
  newApt.fullRooms = newApt.vacantRooms;
  newApt.tenants = newApt.tenant;
  newApt.save(function(err, savedApt){
    if (err){
      res.status(400).send(err);
    } else {
      res.send(savedApt);
    }
  })
})




router.post('/', function(req, res, next){
  Apt.create(req.body, function(err){
    if (err) {
      res.status(400).send(err);
    } else{
      res.send('Apartment Created!');
    }
  });

});

module.exports = router;
