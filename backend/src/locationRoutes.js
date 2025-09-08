const express = require ('express');
const router = express.Router();
require('dotenv').config();

let request = require('request');
const apiKey = process.env.IPSTACK_API_KEY;
console.log('API Key:', apiKey);

router.get('/locations/:ipAddress', (req, res) => {
    let ip = req.params.ipAddress;
    let url = `http://api.ipstack.com/${ip}?access_key=${apiKey}`;

    request(url, function (err, response, body) {
        if (err){
        console.log('error:', error);
        } else {
        console.log('body:', body);
        res.json(body);
        }
    });
});

module.exports = router;