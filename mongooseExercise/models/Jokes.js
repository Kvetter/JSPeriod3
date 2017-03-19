'use strict'

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

/*
Add Schema and Middleware here
 */


var JokeSchema = new Schema({
  joke: { type: String, required: true },
  category: { type: String, enum: ["short", "alcohol", "quote"]},
  reference: { author: String, link: String },
  lastEdited: { type: Date, default: Date.now }
}); 

JokeSchema.pre('save', function (next) {
  this.lastEdited = new Date();
  next();
});


let JokeModel = mongoose.model("Joke", JokeSchema);
module.exports = JokeModel;


