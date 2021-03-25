'use strict';
/*
  Você precisa saber o que o módulo que será testado faz.
*/

let expect = require('chai').expect; // Módulo usado para fazer testes. Existem vários outros.
let sum = require('../src/sum');

describe('# SUM', function() {
  // Cada 'it()' será um teste diferente.
  it('Should SUM module to be a function', function() {
    expect(sum).to.be.a('function');
  });
});