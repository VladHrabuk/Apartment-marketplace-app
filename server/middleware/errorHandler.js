const ApiError = require('../exceptions/api-error');

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ error: err.message, status: err.status });
  } else {
    const error = ApiError.internalServerError();
    return res.status(error.status).json({ error: error.message, status: error.status });
  }
};
