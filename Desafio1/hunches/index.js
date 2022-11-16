const express = require('express');
const path = require('path');
const port = 3000;
const basePath = path.join(__dirname, '../templates');
const app = express();
const router = express.Router();

router.post('/save', (req, res) => {
    const brScoreGame1 = req.body.brScoreGame1;
    const brScoreGame2 = req.body.brScoreGame2;
    const brScoreGame3 = req.body.brScoreGame3;
    const serScore = req.body.serScore;
    const suiScore = req.body.suiScore;
    const camScore = req.body.camScore;
    

    console.log(`Os palpites cadastrados foram:
    Jogo1: Brasil ${brScoreGame1} x ${serScore} Sérvia,
    Jogo2: Brasil ${brScoreGame2} x ${suiScore} Suiça,
    Jogo3: Brasil ${brScoreGame3} x ${camScore} Camarões`);

    res.sendFile(`${basePath}/hunches.html`);
});


router.get('/', (req, res) => {
    res.sendFile(`${basePath}/hunches.html`)
})


module.exports = router;


