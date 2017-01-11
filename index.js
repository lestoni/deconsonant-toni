// Load Module Dependencies

module.exports = function deconsonant(str) {
  if(typeof str !== 'string'){
    throw new TypeError('Expected a string as the first option');
  }

  return str.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '');
};
