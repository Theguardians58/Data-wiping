
const router = require('express').Router();
const ctl = require('../controllers/reportController');
router.get('/sample', ctl.sample);
module.exports = router;
