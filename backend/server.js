
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const morgan = require('morgan');
require('dotenv').config();

const logger = require('./utils/logger');

const apiRoutes = require('./routes/api');
const deviceRoutes = require('./routes/devices');
const wipingRoutes = require('./routes/wiping');
const reportRoutes = require('./routes/reports');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || '*'}));
app.use(express.json({ limit: '5mb' }));
app.use(compression());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.use('/api', apiRoutes);
app.use('/api/devices', deviceRoutes);
app.use('/api/wiping', wipingRoutes);
app.use('/api/reports', reportRoutes);

app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(err.status || 500).json({ error: err.message });
});

app.use('*', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`SecureWipe Pro API running on ${PORT}`);
});
