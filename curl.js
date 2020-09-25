const requirePull = require('request')
const done = require('./done');

  module.exports = function (){
      requirePull("http://www.google.com", function (error, response, body) {
      if (error) {
        done(error);
      } else if (response) {
        done(response);
      } else {
        done(body);
      }
    })
  }



