'use strict';

const express = require('express');
const router = new express.Router();
const Quote = require('../db/models/Quote');

router.get('/', (req, res, next) => {
    Quote.findAll()
        .then(quotes => res.json(quotes))
        .catch(next)
})

module.exports = router;

