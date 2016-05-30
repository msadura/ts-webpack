/*
declare function describe(name: string, callback: Function): void
declare function beforeEach(callback: Function): void
declare function it(name: string, callback: Function): void
declare function expect(name: string, callback: Function): void
*/

// require("node_modules/jasmine/bin/jasmine.js")

var chai = require('chai');
var expect = chai.expect;

describe('testing main.js', function() {
  beforeEach(function(){
    var main = require('./app.ts');
  });

  it ('should be true', function(){
    expect(true).to.equal(true);
  });

  it ('should be false', function(){
    expect(false).to.equal(false);
  });
});
