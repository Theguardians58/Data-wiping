
module.exports = {
  ok: (res, data) => res.json(data),
  fail: (res, status, message) => res.status(status).json({ error: message }),
};
