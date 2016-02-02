var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Tenant = require('../models/tenants');


/* GET ALL tenant listing. */
router.get('/', function(req, res, next) {
  Tenant.find({}, function(err, data) {
    if (err) {
      res.send('Could not find user:' + err)
    } else {
      res.send(data)
    }
  })

  /*Tenant.showAll(function(err, data) {
    if (err) {
      console.log('error occurred:' + err);
      res.send(err)
    } else {
      res.send(data)
    }
  });*/

  // .exec(function(err, tenants) {
  //   if(err){
  //     res.status(400).send(err);
  //   }
  //   else{
  //     res.send(tenants);
  //   }
  // });
});

router.post('/', function(req, res, next) {
  Tenant.create( req.body)
  res.send();
});

module.exports = router;
