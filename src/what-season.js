const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  else{
    const arr = Object.keys(date);
    if(arr.length > 0) {
        throw new Error('Invalid date!')
      } else {
        if ((typeof date !== 'object') || (Array.isArray(date)) || (Object.prototype.toString.call(date) !== '[object Date]'))  throw new Error('Invalid date!');
        else {
        
          let yy = date.getFullYear();
          let mm = date.getMonth();
          let dd = date.getDate();
        
          
          if ((typeof yy !== 'number') || (typeof mm !== 'number') || (typeof dd !== 'number')) return 'Invalid date!';
            
          else {
            if ((mm > 11) || (mm < 0)) return 'Invalid date!';
            if ((dd > 31) || (dd < 1)) return 'Invalid date!';
        
            if ((mm < 2) || (mm === 11)) return 'winter';
            if ((mm > 1) && (mm < 5)) return 'spring';
            if ((mm > 4) && (mm < 8)) return 'summer';
            if ((mm > 7) && (mm < 11)) return 'autumn';
          }
        }
    }
  }
}


module.exports = {
  getSeason
};
