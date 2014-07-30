var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('this is where we show a list of things');
});

router.get('/:id', function(req, res) {
  res.send('this is where we show a thing with id ' + req.params.id);
});

router.post('/', function(req, res) {
  res.send('this is where we create a new thing');
});

router.post('/:id', function(req, res) {
  res.send('this is where we edit a thing with id ' + req.params.id);
});

module.exports = router;
