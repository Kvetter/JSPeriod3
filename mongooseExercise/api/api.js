let router = require("express").Router();
let mongoose = require("mongoose");
let jokes = require("../models/Jokes");
let joke = mongoose.model("Joke");


router.get("/jokes", (req, res) => {
  res.json({
    jokes: joke.find({}, function (err, jokes) {
      if (err) throw err;

      console.log(jokes);
    })
  });
});

router.get("/api/jokes/:id", (req, res) => {
  res.json({ joke: Joke.find({ id: id }) });
});

router.post("/api/jokes/:joke/:cat/:ref", (req, res) => {
  res.json({
    joke: joke.create({
      joke: joke,
      category: cat,
      reference: ref,
    }, function (err, joke) {
      if (!err) {
        console.log("Joke " + joke._id + " saved");
      }
    })
  });
});

router.put("/api/jokes/:id", (req, res) => {

});

router.delete("/api/jokes/:id", (req, res) => {

});

module.exports = router;
