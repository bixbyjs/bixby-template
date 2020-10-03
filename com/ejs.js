exports = module.exports = function() {
  var ejs = require('ejs');
  
  return ejs;
};

exports['@implements'] = 'http://i.bixbyjs.org/template/Engine';
exports['@type'] = 'ejs';
exports['@singleton'] = true;
