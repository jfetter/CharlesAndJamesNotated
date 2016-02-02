'use strict'

var mongoose = require('mongoose')

var Room;

var roomSchema = mongoose.Schema( // Define a userSchema, instances will be documents
  {
     sqft: {type: Number},
     rent: {type: Number}
  }
);

Room = mongoose.model('Room', roomSchema);

module.exports = Room;
