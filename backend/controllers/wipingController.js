
const { WIPING_METHODS } = require('../utils/constants');

exports.methods = (req, res) => {
  res.json({ methods: WIPING_METHODS });
};

exports.start = (req, res) => {
  res.json({ status: 'started', sessionId: 'sim-' + Date.now() });
};
