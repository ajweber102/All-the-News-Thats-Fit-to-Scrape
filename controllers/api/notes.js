'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var cherrio = require('cheerio');
var Article = require('../../models/article');
var Note = require('../../models/note.js');

// get all notes from database
router.get('/', function(req, res) {
    Note
        .find({})
        .exec(function(err, notes) {
            if (err) {
                console.log(err);
                res.status(500);
            } else {
                res.status(200).json(notes);
            }
        });
});

module.exports = router;