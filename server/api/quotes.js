'use strict';

const express = require('express');
const router = new express.Router();
const Quote = require('../db/models/Quote');

router.get('/', (req, res, next) => {
    Quote.findAll()
        .then(quotes => res.json(quotes))
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    Quote.findById(req.params.id)
        .then(poem => res.json(poem))
        .catch(next)
})

module.exports = router;

