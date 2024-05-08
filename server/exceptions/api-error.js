module.exports = class ApiError extends Error {
  status;
  errors;
  constructor(status, message, errors) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static badRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }

  static notFound(message = 'The requested URL was not found on this server') {
    return new ApiError(404, message);
  }

  static internalServerError() {
    return new ApiError(500, 'Internal server error');
  }
};
