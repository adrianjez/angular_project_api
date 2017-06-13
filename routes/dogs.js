/**
 * Created by adrianjez on 12.06.2017.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});
var Dogs = require('./../mongoDB/dog');

/* GET - allows to fetch dogs list. */
router.get('/', function(req, res, next) {
    Dogs.find({},function(err, dogsList) {
        if (err)
            res.send(err);
        res.json(dogsList);
    });
});

/* POST - allows to create new dog **/
router.post('/add', function (req, res, next) {
    Dogs.create(req.body, function (err, doc) {
        if (err) return next(err);
        else {
            //req.title = "Pies";
            //req.message = "Pies " + doc.name + " został stworzony";
            res.json(doc);
        }
    });
});

module.exports = router;