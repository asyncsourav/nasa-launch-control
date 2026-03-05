require('dotenv').config();
const serverless = require('serverless-http');
const app = require('../src/app');
const mongoose = require('mongoose');
const { loadPlanetsData } = require('../src/models/planets.model');

const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
  console.error('ERROR: MONGO_URL environment variable is not set!');
}

let isConnected = false;

async function init() {
  if (isConnected) return;
  if (!MONGO_URL) throw new Error('MONGO_URL not set');
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  isConnected = true;
}

const handler = serverless(app);

module.exports = async (req, res) => {
  try {
    await init();
    return handler(req, res);
  } catch (err) {
    console.error('Serverless init error', err);
    res.statusCode = 500;
    res.end('Server initialization error');
  }
};
