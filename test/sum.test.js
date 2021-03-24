'use strict';
/*
  Você precisa saber o que o módulo que será testado faz.
*/

let expect = require('chai').expect;
let sum = require('../src/sum');

describe('# SUM', function() {
  it('Should SUM module to be a function', function() {
    expect(sum).to.be.a('function');
  });
});