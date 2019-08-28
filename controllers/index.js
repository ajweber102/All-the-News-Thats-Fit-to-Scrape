'use strict';

var express = require('express');
var router = express.Router();
var Article = require('../models/article.js');

// Route
router.get('/', function (req, res) {
    Article
        .find({})
        .where('saved').equals(false)
        .where('deleted').equals(false)
        .sort('-date')
        .limit(20)
        .exec(function (error, articles) {
            if (error) {
                console.log(error);
                res.status(500);
            } else {
                console.log(articles);
                let hbsObj = {
                    title: 'All the News',
                    subtitle: 'Thats Fit to Scrape',
                    articles: articles
                };
                res.render('index', hbsObj);
            }
        });
});
// Establishing route to save articles.
router.get('/saved', function (req, res) {
    Article
        .find({})
        .where('saved').equals(true)
        .where('deleted').equals(false)
        .populate('notes')
        .sort('-date')
});

router.use('/api', require('./api'));
module.exports = router;