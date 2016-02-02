'use strict'

var mongoose = require('mongoose');

var Apt;

var aptSchema = mongoose.Schema( // Define a userSchema, instances will be documents
  {
     imgURL: {type: String},
     name: {type: String},
     maxRooms: {type: Number},
     rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room"}]
  }
)

Apt = mongoose.model('Apt', aptSchema);

module.exports = Apt;
