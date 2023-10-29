const express = require('express');
const request = require('request');
var router = express.Router();

const db = require('./database');

router.get('/', async(req, res, next) => {
    res.render('listings', { title: 'Listings | Kerbside',
        isAuthenticated: req.oidc.isAuthenticated(),
    });
});

router.get('/search', async(req, res, next) => {
    request.post('http://localhost:3000/listings/search',
        { json: { title: null,
            description: null,
            location: null,
            category: null,
            tiemstamp: null,
            quantity: null,
            mass: null,
            dimensions: null,
            tags: null,
            userID: null,
            image: null }},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.status(200).send(body);
            }
        }
    );
});

router.post('/search', async(req, res, next) => {
    try {
        console.log("entry");
        items = await db.promise().query(`SELECT * FROM LISTINGSTABLE`);
        console.log(items);
        res.status(200).send(items);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;