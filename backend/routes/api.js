
const router = require('express').Router();
const ctl = require('../controllers/apiController');
router.get('/', ctl.info);
module.exports = router;
