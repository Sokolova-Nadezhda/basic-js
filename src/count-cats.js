const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  
  let catsCount = 0;
  
  for (let cats of arr) {
   for (i = 0; i < cats.length; i ++){
     if (cats[i] === '^^') catsCount = catsCount + 1;
   }
 }
 
 return catsCount;
  
}

module.exports = {
  countCats
};
