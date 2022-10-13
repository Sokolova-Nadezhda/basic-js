const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(N) {
  let t;
  let numN = '';

  if ((typeof N === 'string') && (N.includes('-') === false)){
    if (N.includes('.') === false){
      numN = N.match(/\d+/g);
      numberN = Number(numN);
  
      if ((numberN > 0) && (numberN < 15)){
        
        let k = 0.693/HALF_LIFE_PERIOD;
        let ln = MODERN_ACTIVITY/numberN;
        t = Math.ceil((Math.log(ln))/k);
        return t;
        
      } else {return false};
    } else {
      numN = N.match(/\d+\.\d+/g);
      numberN = Number(numN);
  
      if ((numberN > 0) && (numberN < 15)){
        
        let k = 0.693/HALF_LIFE_PERIOD;
        let ln = MODERN_ACTIVITY/numberN;
        t = Math.ceil((Math.log(ln))/k);
        return t;
        
      } else {return false};
    }
  } else {return false};
  
}

module.exports = {
  dateSample
};
