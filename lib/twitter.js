//
// # nails-Twitter
//
// *A Twitter service for nails-framework*

var Twit   = require('twit');
var assert = require('assert');

exports.name = 'twitter';
exports.type = 'service';

exports.register = function(app, options, next) {
  options = options || exports.options || {};
  
  assert(options.consumer_key, 'Twitter service requires options.consumer_key');
  assert(options.consumer_secret, 'Twitter service requires options.consumer_secret');
  assert(options.access_token, 'Twitter service requires options.access_token');
  assert(options.access_token_secret, 'Twitter service requires options.access_token_secret');

  app.service.register('twitter', new Twit(options));

  next();
};
