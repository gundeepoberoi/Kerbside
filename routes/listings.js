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
        { json: { search: null,
            location: null,
            category: null,
            timestamp: null,
            mass: null,
            dimensions: null,
            tags: null }},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.status(200).send(body);
            }
        }
    );
});

router.post('/search', async(req, res, next) => {
    // Process input body
    console.log("Search body: ", req.body);
    let { search, location, category, timestamp, mass, dimensions, tags } = req.body;

    // Search will find all entries if empty
    if (search === null) search = ["%"];
    // Otherwise it will only find entries including the given phrase
    else search = "%"+search+"%";

    // Search will find all entries if empty
    if (category === "Any" || category === null) category = ["%"];

    try {
        items = await db.promise().query(`SELECT * FROM LISTINGSTABLE WHERE (title LIKE '${search}' OR description LIKE '${search}') AND category LIKE '${category}'`);
        console.log("Items: ", items[0]);

        // items[0].forEach(async item => {
        //     console.log("First item: ", item);
        //     item.image = await blobToImage(new Blob([item.image]));
        //     console.log(item.image);
        // });

        res.status(200).send(items[0]);
    } catch (err) {
        console.log(err);
    }
});

router.get('/details', async(req, res, next) => {


    res.render('details', { title: 'Details | Kerbside',
        isAuthenticated: req.oidc.isAuthenticated(),
    });
});

router.get('/categories', async(req, res, next) => {
    try {
        categories = await db.promise().query(`SELECT distinct category FROM LISTINGSTABLE`);
        console.log(categories[0][0]);
        res.status(200).send(categories[0]);
    } catch (err) {
        console.log(err);
    }
})

router.get('/tags', async(req, res, next) => {
    try {
        tags = await db.promise().query(`SELECT distinct tag FROM TAGSTABLE`);
        console.log(tags[0][0]);
        res.status(200).send(tags[0]);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;