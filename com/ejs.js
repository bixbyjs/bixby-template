exports = module.exports = function() {
  return require('ejs');
};

exports['@implements'] = [
  'http://i.bixbyjs.org/template/ejs',
  'http://i.bixbyjs.org/template/Engine'
];
exports['@type'] = 'ejs';
exports['@singleton'] = true;
