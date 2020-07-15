

/**
 * parses string and adds commas per 3 digits
 * @param {Integer} value Value to be parsed and formatted
 * @returns {string} String of the integer with commas added
 */
export const commaAdder = (value) => {
  return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
};