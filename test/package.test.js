/* global describe, it */

var expect = require('chai').expect;


describe('@authnomicon/prompts', function() {
  
  describe('package.json', function() {
    var json = require('../package.json');
    
    it('should have assembly metadata', function() {
      expect(json.assembly.namespace).to.equal('template');
      expect(json.assembly.components).to.deep.equal([
        'ejs'
      ]);
    });
  });
  
});
