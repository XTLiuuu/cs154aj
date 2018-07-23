'use strict';
const mongoose = require( 'mongoose' );

var friendSchema = mongoose.Schema( {
  user: String,
  username: String,
  friend: String,
  friendname: String,
  status: String,
} );

module.exports = mongoose.model( 'Friend', friendSchema );
//Friend is the name of the colllection
