var express = require('express');
const utilisateur = require('../controllers/control');
var router = express.Router();


/* GET home page. */
router.get('/',utilisateur.accueil)
router.post('/',utilisateur.insertionpost)


module.exports = router;
