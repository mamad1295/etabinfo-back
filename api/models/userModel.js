'use strict';
var mongoose = require('mongoose');
var schema = mongoose.Schema;


var userSchema = new schema({
  firstname: {
    type: String,
    Required: 'Kindly enter the firstname'
  },
  lastname: {
    type: String,
    Required: 'Kindly enter the lastname'
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['nouveau', 'ancien', 'en cours']
    }],
    default: ['nouveau']
  }
});

module.exports = mongoose.model('users', userSchema);