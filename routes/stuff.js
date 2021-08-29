const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const stuffCtrl = require('../controllers/stuff');

// LES ROUTES RENVOIE VERS LE CONTROLLER OU CE TROUVE LA LOGIQUE METIER
router.post('/', auth, multer, stuffCtrl.createThing );
router.put('/:id', auth, multer, stuffCtrl.modifyThing );
router.delete('/:id', auth,  stuffCtrl.deleteThing );
router.get('/:id', auth, stuffCtrl.getOneThing );
router.get('/', auth, stuffCtrl.getAllThing );

module.exports = router;

