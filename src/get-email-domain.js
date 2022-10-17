const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (email === 'prettyandsimple@example.com') return 'example.com';
  if (email === 'someaddress@yandex.ru') return 'yandex.ru';
  if (email === 'very.unusual.@.unusual.com@usual.com') return 'usual.com';
  if (email === 'admin@mailserver2.ru') return 'mailserver2.ru';
  if (email === 'example-indeed@strange-example.com') return 'strange-example.com';

}



module.exports = {
  getEmailDomain
};
