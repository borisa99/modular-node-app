const Redis = require('ioredis');

const redis = new Redis();

redis.on('error', function (error) {
  console.log('Redis unhandled error ', error);
});

redis.on('connect', function () {
  console.log('konektovan');
});

redis.on('message', function (channel, message) {
  // based on chanel name includes file and calls start function
  var job = require(`./redis-jobs/${channel}`);
  job.start(message, io);
});

module.exports = redis;
