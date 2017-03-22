let router = require("express").Router();
let mongoose = require("mongoose");
let jokes = require("../models/Jokes");
let joke = mongoose.model("Joke");



router.get("/jokes", (req, res) => {

  joke.find({}, (err, jokes) => {
    if (err) throw err;

    res.json(jokes);

  })
});

router.get("/jokes/:id", (req, res) => {

  joke.findOne({ _id: req.params.id }, (err, joke) => {
    if (err) throw err;

    res.json(joke);
  })
});

router.post("/jokes", (req, res) => {

  // Should work but doesn't, no idea why :/
  joke.create(req.body, function (err, joke) {

    if (err) throw err;

    res.json(joke);
  });

});

router.put("/jokes/:id", (req, res) => {

  joke.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, joke) => {
    if (err) throw err;

    res.json(joke);
  })

});

router.delete("/jokes/:id", (req, res) => {

  console.log(req.params.id);
  joke.findOneAndRemove({ _id: req.params.id }, (err, joke) => {

    if (err) throw err;

    res.json(joke);
  });

});

module.exports = router;
