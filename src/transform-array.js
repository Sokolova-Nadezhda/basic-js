const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 let transform = array => {
  let result;
  let newArray = [];
  
  if (Array.isArray(array)){
    if (array.length < 1) return array; 
    else {
      for (i = 0; i < array.length; i++){
        if (array.filter(i => i.constructor.name == "Object").length < 1){

          switch (array[i]){
            case '--discard-next': 
              result = (array.slice(0, i) + array.slice(i + 2)).split(',');
              result = result.map(string => parseInt(string)); 
              newArray = result;
              return newArray;

            case '--discard-prev':
              result = (array.slice(0, i) + array.slice(i + 1)).split(',');
              result = result.map(string => parseInt(string)); 
              newArray = result;
              return newArray;

            case '--double-next':
              result = (array.slice(0, i) + array[i + 1] + array.slice(i + 1)).split(',');
              result = result.map(string => parseInt(string));
              newArray = result;
              return newArray;

            case '--double-prev':
              result = (array.slice(0, i) + array.slice(i + 1)).split(',');
              result = result.map(string => parseInt(string)); 
              newArray = result;
        
              return newArray;
          }
            
        } else {return array;}
      }
    }
  } else {
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  };

}




module.exports = {
  transform
};
