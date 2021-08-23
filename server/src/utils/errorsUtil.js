class AppCustomError extends Error {
  constructor(message) {
    super(message);
    this.status = 500;
  }
};

class BadRequestError extends AppCustomError {
  constructor(message = 'Invalid request') {
    super(message);
    this.status = 400;
  }
};

module.exports = {
  AppCustomError,
  BadRequestError,
};
