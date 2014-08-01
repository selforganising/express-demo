var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  req.db.collection('things').find().toArray(function (err, items) {
      if (err) res.send(err);
      res.json(items);
  }); 
});

router.get('/:name', function(req, res) {
  req.db.collection('things').findOne({name: req.params.name}, function (err, item) {
      if (err) res.send(err);
      res.json(item);
  });
});

router.post('/', function(req, res) {
    req.db.collection('things').insert(req.body, function(err, item) {
	if (err) res.send(err);
	res.send('created a new thing');
    });
});

router.post('/:name', function(req, res) {
  req.db.collection('things').update({ name: req.params.name }, req.body, function(err, item) {
      if (err) res.send(err);
      res.send('updated a thing');
  });
});

module.exports = router;
