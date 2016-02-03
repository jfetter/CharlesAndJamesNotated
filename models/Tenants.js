'use strict'

var mongoose = require('mongoose')

var Tenant; // This is *** requiree to be here as a placeholder because of async "need to know"

var tenantSchema = mongoose.Schema( // Define a userSchema, instances will be documents
  {
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    phone: {type: String},
    // since the app is suppose to allow an "apartment manager" to 
    // have an overview of all of the apartments in his complex
    // all the rooms and all the people and associate the people with apts
    // since you need to use addl npm libraries to
    //  "deep populate" (ie populate) a schema reference
    // that is inside of a nother schema reference 
    // (eg you can populate apartments -> tenant **but not apt -> tenant ->room )
    // it might be better to include tenant and room refs in the apt schema rather
    // than 
    AptRef: {type: mongoose.Schema.Types.ObjectId, ref: "Apt"},
    RoomRef: {type: mongoose.Schema.Types.ObjectId, ref: "Room"}
  }
)


/*tenantSchema.statics.showAll = function(callback) {
  Tenant.find({}, function(err, tenants){
    if(err) return err;
    return tenants;
  });
}*/


Tenant = mongoose.model('Tenant', tenantSchema);


module.exports = Tenant;
