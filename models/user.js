'use strict'

var mongoose = require('mongoose')

var User; // This is *** requiree to be here as a placeholder because of async "need to know"

var userSchema = mongoose.Schema( // Define a userSchema, instances will be documents
  {
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    age: {type: Number},
    birthday: {type: Date}
  }
)

User = mongoose.model('User', userSchema);

module.exports = User
