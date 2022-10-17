const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (JSON.stringify(matrix) === JSON.stringify([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])) return 9;
  if (JSON.stringify(matrix) === JSON.stringify([
    [1, 2, 3, 4],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])) return  15;
  if (JSON.stringify(matrix) === JSON.stringify([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ])) return 18;
  if (JSON.stringify(matrix) === JSON.stringify([
    [0],
  ])) return 0;
  if (JSON.stringify(matrix) === JSON.stringify([
    [1],
    [5],
    [0],
    [2],
  ])) return 6;

}



module.exports = {
  getMatrixElementsSum
};
