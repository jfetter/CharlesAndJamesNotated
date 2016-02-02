'use strict'

var mongoose = require('mongoose')

var Tenant; // This is *** requiree to be here as a placeholder because of async "need to know"

var tenantSchema = mongoose.Schema( // Define a userSchema, instances will be documents
  {
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    phone: {type: String},
    AptRef: {type: mongoose.Schema.Types.ObjectId, ref: "Apt"},
    RoomRef: {type: mongoose.Schema.Types.ObjectId, ref: "Room"}
  }
)



Tenant = mongoose.model('Tenant', tenantSchema);


module.exports = Tenant;
