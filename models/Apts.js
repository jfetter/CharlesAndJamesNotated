'use strict'

var mongoose = require('mongoose');

var Apt;

var aptSchema = mongoose.Schema( // Define a userSchema, instances will be documents
  {
  	//  imgURL: {type: String},
    // name: {type: String},
    // maxRooms: {type: Number},
     //rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room"}],
  	// your apt schema has to match your front end
  	// currently your front end does not have any
  	//fields for imageUrl or max rooms -- but it does have
  	// number of occupied rooms and vacant rooms -- which are not
  	// on your schema.
     // also it would be handy for the purposes of this app to include a reference
     // to the tenant schema here... 
     // since the app is suppose to allow an "apartment manager" to 
    // have an overview of all of the apartments in his complex
    // all the rooms and all the people and associate the people with apts
    // since you need to use addl npm libraries to
    //  "deep populate" (ie populate) a schema reference
    // that is inside of a nother schema reference 
    // (eg you can populate apartments -> tenant **but not apt -> tenant ->room )
    // it might be better to include tenant and room refs in the apt schema rather
    // than 
    // here is a sample of a schema based on your frontend
        name: {type: String},
        vacantRooms: {type: Number},
        fullRooms: {type: Number},
        tenants: [{type: mongoose.Schema.Types.ObjectId, ref: "tenants"}]
  }
)

Apt = mongoose.model('Apt', aptSchema);

module.exports = Apt;
