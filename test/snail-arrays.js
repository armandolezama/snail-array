const assert = require('chai').assert;

  const {
    snailArrays,
    getValues
  } = require('../src/snail-arrays')

suite('Snail arrays', () => {
  const arrayLength = 5;
  const twoDimensionalArray = Array.from({ length : arrayLength}, (v, row) => {
    return Array.from( {length : arrayLength}, (v, column) => {
      return [`${row} - ${column}`]
    })
  })
  test('get values from column', () => {
    assert.deepEqual(getValues([0,4], [4,4], twoDimensionalArray), [['0 - 4'], ['1 - 4'], ['2 - 4'], ['3 - 4'], ['4 - 4']])
  });
  test('get values from row', () => {
    assert.deepEqual(getValues([3, 0], [3, 4], twoDimensionalArray), [['3 - 0'], ['3 - 1'], ['3 - 2'], ['3 - 3'], ['3 - 4']])
  });
  test('3x3 bidimensional array', () => {
    const arrayFromTest = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    assert.deepEqual(snailArrays(arrayFromTest), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  test('5x2 bidimensional array', () => {
    const arrayFromTest = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ];
    assert.deepEqual(snailArrays(arrayFromTest), [1, 2, 4, 6, 8, 10, 9, 7, 5, 3]);
  });
  test('5x2 bidimensional array', () => {
    const arrayFromTest = [
      [1, 2 ,3 ,4 ,5],
      [6, 7, 8, 9, 10]
    ];
    assert.deepEqual(snailArrays(arrayFromTest), [1, 2, 3, 4, 5, 10, 9, 8, 7, 6]);
  });
});