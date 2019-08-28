'use strict';

var express = require('express'),
    router = express.Router(),
    request = require('request'),
    cheerio = require('cheerio'),
    Article = require('../../models/article'),
    Note = require('../../models/note');