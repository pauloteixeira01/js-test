'use strict';

function sum(n1, n2) {
  if (!n1 || !n2 && typeof n1 !== 'number' || typeof n2 !== 'number') { 
    return new Error('Pass two numbers for parameter');
  }
  return n1 + n2;
}

module.exports = sum;