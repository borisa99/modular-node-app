module.exports = function (req, res, next) {
  const { token } = req.body;
  if (token) res.send('Authenticated');
  next();
};
