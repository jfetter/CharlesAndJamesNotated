'use strict'

var mongoose = require('mongoose')

var Tenant; // This is *** requiree to be here as a placeholder because of async "need to know"

var tenantSchema = mongoose.Schema({
   firstName: {type: String, required: true},
   lastName: {type: String, required: true},
   phone: {type: String},
   email: {type: String},
   AptRef : {type: mongoose.Schema.Types.ObjectId, ref: "Apt"},
   RoomRef : {type: mongoose.Schema.Types.ObjectId, ref: "Room"}
}
 
Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant
