/** Create an object composed of the picked object properties */
const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      /** Eslint-disable-next-line no-param-reassign */
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

module.exports = pick;
