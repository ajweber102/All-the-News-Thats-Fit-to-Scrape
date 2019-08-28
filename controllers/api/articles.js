'use strict';

var express = require('express'),
    router = express.Router(),
    request = require('request'),
    cheerio = require('cheerio'),
    Article = require('../../models/article'),
    Note = require('../../models/note');

// Get database articles
router.get('/', function (req, res) {
    Article
        .find({})
        .exec(function (error, docs) {
            if (error) {
                console.log(error);
                res.status(500);
            } else {
                res.status(200).json(docs);
            }
        });
});