'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var cherrio = require('cheerio');
var Article = require('../../models/article');
var Note = require('../../models/note.js');

// Getting notes from DB
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

// Add note to saved article
router.post('/:id', function(req, res) {
    let newNote = new Note(req.body);
    newNote.save(function(err, doc) {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            Article.findOneAndUpdate(
                { _id: req.params.id },
                { $push: { 'notes': doc.id } },
            );
        }
    });
});

module.exports = router;