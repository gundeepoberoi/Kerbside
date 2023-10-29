const express = require('express');
const request = require('request');
var router = express.Router();
const axios = require('axios'); // Include the axios module

const db = require('./database');

router.get('/', async(req, res, next) => {
    res.render('details', { title: 'Details | Kerbside',
        isAuthenticated: req.oidc.isAuthenticated(),
    });
});


// Define a route to handle the POST request
router.post('/create-convo', async (req, res) => {
    try {
      // Data received from the client
      const dataToSend = req.body;
  
    //   const headers = {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer xoxb-6104746594806-6108474493109-en6maSCmjbz5V0OVZvwYtI3W'
    //   }
  
      // Make a POST request using Axios to an external API
      const response = await axios.post(apicall, dataToSend, {headers});
  
      // Handle the response from the external API
      console.log(response.data);
  
      // Send a response back to the client
      res.json({ message: 'POST request successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  module.exports = router;