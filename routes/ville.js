var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ville', { nom_ville: req.query.nom_ville });
});

module.exports = router;