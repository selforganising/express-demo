var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var db = req.db;     
    db.collection('things').find().toArray(function (err, items) { 
        res.json(items); 
    }); 
});

module.exports = router;
