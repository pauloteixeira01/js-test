'use strict';
/*
  Você precisa saber o que o módulo que será testado faz.
*/

let expect = require('chai').expect; // Módulo usado para fazer testes. Existem vários outros.
let sum = require('../src/sum');

describe('# SUM', function() {
  // Cada 'it()' será um teste diferente.
  it('Should SUM module to be a function', () => {
    expect(sum).to.be.a('function');
  });

  it('Should SUM return 10 when I pass 1 and 9', () => {
    expect(sum(1, 9)).to.be.equal(10);
  });

  it('Should SUM return 5 when I pass 2 and 3', () => {
    expect(sum(2, 3)).to.be.equal(5);
  });

  it('Should SUM return an error if it receive just one parameter', () => {
    expect(sum(2)).to.be.an('error');
  });

  it('Should SUM return an error if the parameter has not a number', () => {
    expect(sum('x', 'y')).to.be.an('error');
  });
});