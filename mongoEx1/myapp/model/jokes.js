var connection = require("../db/db");
var db = connection.get();  //Get it like this

exports.allJokes = 	function(callback){
  var jokes = db.jokes.find();  
  callback(err, jokes);
};
exports.findJoke = 	function(id,callback){
  var joke = db.jokes.find({id: id});
  callback(err, joke);
};
exports.addJoke = 	function(jokeToAdd,callback) {
  callback(err, db.jokes.insert(jokeToAdd));
};
exports.editJoke = 	function(jokeToEdit,callback) {

};
exports.deleteJoke = 	function(id,callback){
  callback(err, db.jokes.remove({id: id}));
};
exports.randomJoke = 	function randomJoke(callback){};
