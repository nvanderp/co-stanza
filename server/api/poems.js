'use strict'

const express = require('express')
const router = new express.Router()
const Poem = require('../db/models/Poem')

router.get('/', (req, res, next) => {
    Poem.findAll()
        .then(poems => res.json(poems))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Poem.create({
        content: req.body.content
    })
        .then(poem => res.json(poem))
        .catch(next)
})

router.get('/:poemId', (req, res, next) => {
    Poem.findById(req.params.poemId)
        .then(poem => res.json(poem))
        .catch(next)
})



module.exports = router
