const asyncAwaitWrapper = (cb) => {
  return (req, res, next) =>
    cb(req, res)
      .catch(next);
};
module.exports = {
  asyncAwaitWrapper,
};
