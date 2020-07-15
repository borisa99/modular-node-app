module.exports = function (app) {
  // #1 Solution
  app.use('/api/items', require('./items/itemsRouter'));
  app.use('/api/orders', require('./orders/ordersRouter'));

  // #2 Solution
  require('./users/_use')(app);
};
