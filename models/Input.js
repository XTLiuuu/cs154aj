'use strict';
const mongoose = require( 'mongoose' );
var inputSchema = mongoose.Schema( {
  email: String,
  title: String,
  allDay: Boolean,
  start: Date, // include date and time
  end: Date,
  recurence: String,
  startDate: String,
  startTime: String,
  endDate: String,
  endTime: String,
  editable: Boolean, //drag
  overlap: Boolean,
  color: String,
  adCheck: String,
  description: String,
  noti: String,
  sessionID: String,
} );

module.exports = mongoose.model( 'Input', inputSchema );
