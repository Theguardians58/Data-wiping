
const router = require('express').Router();
const ctl = require('../controllers/deviceController');
router.get('/simulated', ctl.simulated);
module.exports = router;
