
exports.simulated = (req, res) => {
  res.json({
    model: 'Generic Android Device',
    androidVersion: 'Android 14',
    storageType: 'UFS 3.1',
    totalStorage: '128 GB',
    availableStorage: '95 GB',
    encryptionStatus: 'Enabled',
    rootAccess: 'Available',
    securityPatch: 'September 2025'
  });
};
