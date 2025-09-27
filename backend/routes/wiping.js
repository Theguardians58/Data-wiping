
const router = require('express').Router();
const ctl = require('../controllers/wipingController');
router.get('/methods', ctl.methods);
router.post('/start', ctl.start);
module.exports = router;
