const express = require('express');
const request = require('request');
var router = express.Router();

const db = require('./database');

router.get('/', async(req, res, next) => {
    res.render('details', { title: 'Details | Kerbside',
        isAuthenticated: req.oidc.isAuthenticated(),
    });
});

module.exports = router;