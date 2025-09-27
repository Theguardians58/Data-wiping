
exports.sample = (req, res) => {
  res.json({
    title: 'SecureWipe Pro Completion Certificate',
    sessionId: 'sim-12345',
    timestamp: new Date().toISOString(),
    verification: 'OK',
  });
};
