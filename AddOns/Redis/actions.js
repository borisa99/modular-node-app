const fs = require('fs');
const redis = require('./index');

// gets all files from folder and subscribes to chanels by file name
function subscribeFiles() {
  fs.readdir('./redis-jobs', function (err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
      redis.subscribe(file.replace('.js', ''));
    });
  });
}

function setRedis(key, value) {
  redis.set(key, value);
}

function getRedis(key) {
  redis.get(key, function (err, result) {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });
}

module.exports = {
  subscribeFiles,
  getRedis,
  setRedis,
};
