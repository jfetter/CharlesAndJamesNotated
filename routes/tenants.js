var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Tenant = require('../models/tenants');


/* GET ALL tenant listing. */
router.get('/', function(req, res, next) {
  Tenant.find({}, function(err, data) {
    if (err) {
      res.send('Could not find user[s]:' + err)
    } else {
      res.send(data)
    }
  })
});

// GET single tenant
router.get('/:tenantId', function(req, res, next) {
  Tenant.find({_id:req.params.tenantId}, function(err, data) {
    if (err) {
      res.send('Could not find user:' + err)
    } else {
      res.send(data)
    }
  })
});




router.post('/', function(req, res, next) {
  Tenant.create( req.body)
  res.send();
});

router.delete('/:tenantId', function(req, res, next) {
  console.log('Entered delete part 1');
  Tenant.remove({_id: req.params.tenantId}, function(err) {
    console.log('Entered delete part 2');
    if (err) {
      res.send('Remove failed:' + err)
    } else {
      res.send();
    }
  })
});



module.exports = router;
