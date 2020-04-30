const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

const app = express();

dotenv.config();

app.use(cors({ credentials: true, origin: 'https://cjosue15-social.herokuapp.com/' }));

const port = Number(process.env.PORT);

app.use(require('./routes/index.routes'));

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
