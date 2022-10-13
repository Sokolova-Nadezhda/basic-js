const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(arrTeam) {
  let strTeam;
  let newArrTeam = [];

  if (Array.isArray(arrTeam)){
    for (i = 0; i < arrTeam.length; i++){ //для всех элементов массива
      if (typeof arrTeam[i] === 'string'){ //если элемент - строка
        newArrTeam = newArrTeam.concat(arrTeam[i].trimStart()[0].toUpperCase());
        
        strTeam = newArrTeam.sort().join(''); 
  
      }
    }
    return strTeam;
  } else {return false;}
}

module.exports = {
  createDreamTeam
};
