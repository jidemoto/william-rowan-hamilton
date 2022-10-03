const assert = require('assert');
const sample = require('../index');

describe('test module', function () {
  describe('execution', function () {
    it('Should return valid value for X', function () {
      assert.equal(sample(2, 3).calculateY(100), 203);
    });
  });
});