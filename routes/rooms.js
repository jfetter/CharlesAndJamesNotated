var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Room = require('../models/Rooms');


/* GET ALL room listing. */
router.get('/', function(req, res, next) {
  Room.find({}, function(err, data) {
    if (err) {
      res.send('Could not find room:' + err)
    } else {
      res.send(data)
    }
  })
});

// GET single room
router.get('/:roomId', function(req, res, next) {
  Room.find({_id:req.params.roomId}, function(err, data) {
    if (err) {
      res.send('Could not find user:' + err)
    } else {
      res.send(data)
    }
  })
});



//create new room
router.post('/', function(req, res, next) {
  Room.create( req.body, function(err){
    if (err) {
      res.status(400).send(err);
    } else{
      res.send('Room Created!');
    }
  });
});

//delete room
router.delete('/:roomId', function(req, res, next) {
  Room.remove({_id: req.params.roomId}, function(err) {
    if (err) {
      res.send('Remove failed:' + err)
    } else {
      res.send();
    }
  })
});



module.exports = router;
