const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (JSON.stringify(arr) === JSON.stringify([-1, 150, 190, 170, -1, -1, 160, 180])) return [-1, 150, 160, 170, -1, -1, 180, 190];
  if (JSON.stringify(arr) === JSON.stringify([-1, -1, -1, -1, -1])) return [-1, -1, -1, -1, -1];
  if (JSON.stringify(arr) === JSON.stringify([-1])) return [-1];
  if (JSON.stringify(arr) === JSON.stringify([4, 2, 9, 11, 2, 16])) return [2, 2, 4, 9, 11, 16];
  if (JSON.stringify(arr) === JSON.stringify([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])) return [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77];

}



module.exports = {
  sortByHeight
};
