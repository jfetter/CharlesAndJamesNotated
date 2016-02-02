'use strict'

var mongoose = require('mongoose')

var Apt;

var aptSchema = mongoose.Schema( // Define a userSchema, instances will be documents
  {
     name: {type: String}
     rooms: [{ type: Schema.Types.ObjectId, ref: "Room"}]
  }
)

Apt = mongoose.model('Apt', aptSchema);

module.exports = Apt
