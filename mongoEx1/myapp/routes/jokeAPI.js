var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes");
var joke = mongoose.model("Joke");



router.get('/joke/all', function (req, res, next) {
  res.send({
    joke: joke.find({}, function (err, jokes) {
      if (err)
        res.send(err);

      console.log(jokes);
      res.json(jokes);
    })
  })
});

router.get('/jokes', function (req, res, next) {
  res.send({ jokes: jokes.allJokes })
});

router.post('/joke', function (req, res, next) {
  var joke = req.body;
  console.log(JSON.stringify(joke));
  jokes.addJoke(joke.joke);
  res.json({ joke: joke })
});

module.exports = router;