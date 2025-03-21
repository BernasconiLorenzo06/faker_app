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
    var lego = getLego();
    res.render('index', { title: 'lego di paolo', lego:lego});
  });


  router.get('/:set_lego', (req, res) => {
    const set_lego = req.params.set_lego;
    const set = lego.find(s => s.id==set_lego)
    res.render('lego', { title: 'primo lego', set:set});
  });
module.exports = router;
