require('dotenv').config();

const PROXY_CONFIG = {
  '/connect': {
    target: process.env.API_URL || 'http://localhost:8000',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
  },
};

module.exports = PROXY_CONFIG;
