const express = require('express');

const app = express();

const axios = require('axios');

const querystring = require('querystring');

app.post('/', (req, res) => {
    const createBase64 = () => {
        return Buffer.from(process.env.API_KEY + ':' + process.env.API_SECRET_KEY).toString('base64');
    };

    const encodeBase64 = createBase64();

    axios({
        method: 'post',
        url: 'https://api.twitter.com/oauth2/token',
        data: querystring.stringify({ grant_type: 'client_credentials' }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${encodeBase64}`,
        },
    })
        .then(function (response) {
            return res.json(response.data);
        })
        .catch(function (error) {
            return res.json({ error });
        });
});

module.exports = app;
