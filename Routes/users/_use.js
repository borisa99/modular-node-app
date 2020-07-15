const router = require('./usersRouter');

module.exports = function (app) {
  app.use('/api/users', router);
};
