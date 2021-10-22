/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../com/ejs');


describe('ejs', function() {
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.deep.equal([
      'http://i.bixbyjs.org/template/ejs',
      'http://i.bixbyjs.org/template/Engine'
    ]);
    expect(factory['@type']).to.equal('ejs');
  });
  
  it('should create template engine', function() {
    var engine = factory();
    
    expect(engine).to.be.an('object');
    expect(engine.render).to.be.a('function');
    expect(engine.renderFile).to.be.a('function');
  });
  
});
