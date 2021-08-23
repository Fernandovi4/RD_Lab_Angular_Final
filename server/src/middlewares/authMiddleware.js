
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const {
    authorization,
  } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: 'Please provide "autorization header !!"',
    });
  }

  const [, token] = authorization.split(' ');

  if (!token) {
    return res.status(401).json({
      message: 'Please include token to request',
    });
  }

  try {
    const tokenPayLoad = jwt.verify(token, 'uberhw');

    req.user = {
      userId: tokenPayLoad._id,
      email: tokenPayLoad.email,
    };

    next();
  } catch (err) {
    return res.status(401).json({message: err.message});
  }
};

module.exports = {
  authMiddleware,
};
