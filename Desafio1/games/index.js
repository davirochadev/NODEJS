const express = require('express');
const path = require('path');
const port = 3000;
const basePath = path.join(__dirname, '../templates');
const app = express();
const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(`${basePath}/games.html`)
})


module.exports = router;


