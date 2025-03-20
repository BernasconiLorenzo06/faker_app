const lego = require('../lego.json');
const fs = require('fs');
const path = require('path');
var express = require('express');
var router = express.Router();

const dataPath = path.join(__dirname, '../lego.json');

// Legge i dati delle squadre
function getLego() {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);

}

/* GET users listing. */
router.get('/', (req, res) => {
    const lego = getLego();
    res.render('index', { title: 'lego di paolo', lego:lego});
  });

module.exports = router;
