require('dotenv').config();
const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const { router: apartmentRouter } = require('./routes/apartments');
const errorHandler = require('./middleware/errorHandler');
const ApiError = require('./exceptions/api-error');

const server = express();

server.use(express.json());

server.use('/apartments', apartmentRouter);

server.all('*', async (req, res, next) => {
  const error = ApiError.notFound();
  next(error);
});

server.use(errorHandler);

async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}

const { port: serverPort } = config.server;
server.listen(serverPort, () => {
  console.log(`Server listening on [${serverPort}] port!`);
});

connect();
