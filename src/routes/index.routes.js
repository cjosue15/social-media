const express = require('express');

const app = express();

const axios = require('axios');

const querystring = require('querystring');

app.post('/', async (req, res) => {
    try {
        const { name } = req.body;

        const createBase64 = () => {
            return Buffer.from(process.env.API_KEY + ':' + process.env.API_SECRET_KEY).toString('base64');
        };
        const encodeBase64 = createBase64();

        const token = await axios({
            method: 'post',
            url: 'https://api.twitter.com/oauth2/token',
            data: querystring.stringify({ grant_type: 'client_credentials' }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${encodeBase64}`,
            },
        });
        const response = await axios({
            method: 'get',
            url: `https://api.twitter.com/1.1/users/show.json?screen_name=${name}`,
            headers: {
                Authorization: `Bearer ${token.data.access_token}`,
            },
        });
        return res.json(response.data);
    } catch (error) {
        return res.json({ error });
    }
});

module.exports = app;
