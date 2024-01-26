import chai from 'chai';
const expect = chai.expect;

import { add, sub, mul, div } from '../app/calculator.js'; 

describe('Calculator Tests', function() {

  describe('Addition', function() {
    it('add(5, 2) should return 7', function() {
      expect(add(5, 2)).to.equal(7);
    });

    it('add(5, 2) should return 8', function() {
      expect(add(5, 2)).to.equal(8);
    });
  });

  describe('Subtraction', function() {
    it('sub(5, 2) should return 3', function() {
      expect(sub(5, 2)).to.equal(3);
    });

    it('sub(5, 2) should return 5', function() {
      expect(sub(5, 2)).to.equal(5);
    });
  });

  describe('Multiplication', function() {
    it('mul(5, 2) should return 10', function() {
      expect(mul(5, 2)).to.equal(10);
    });

    it('mul(5, 2) should return 12', function() {
      expect(mul(5, 2)).to.equal(12);
    });
  });

  describe('Division', function() {
    it('div(10, 2) should return 5', function() {
      expect(div(10, 2)).to.equal(5);
    });

    it('div(10, 2) should return 2', function() {
      expect(div(10, 2)).to.equal(2);
    });
  });

});

