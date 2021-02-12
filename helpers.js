/**
 * Helper functions for the express-routing exercise.
 */

/**
 * Make an array of strings into an array of numbers, or throw an error
 * @param {Array} stringArray an array of strings
 * @returns {Array|Error} an array of numbers, or an error object
 */
function processNumArray(stringArray) {
  let res = [];

  for (let i = 0; i < stringArray.length; i += 1) {
    let num = Number(stringArray[i]);

    if (Number.isNaN(num)) {
      return new Error(
        `Value '${stringArray[i]}' at index ${i} is not a valid number.`
      );
    }

    res.push(num);
  }

  return res;
}

/**
 * Take an array of numbers and get the mean average
 * @param {Array} numArray an array of numbers
 */
function getMean(numArray) {
  if (numArray.length === 0) return null;

  let sum = 0;
  for (let i = 0; i < numArray.length; i += 1) {
    sum += numArray[i];
  }

  return sum / numArray.length;
}

/**
 * Take an array of numbers and get the median average
 * @param {Array} numArray an array of numbers
 */
function getMedian(numArray) {
  if (numArray.length === 0) return null;

  numArray.sort((a, b) => a - b);

  if (numArray.length % 2 === 0) {
    medLeft = numArray[Math.floor(numArray.length / 2) - 1];
    medRight = numArray[Math.floor(numArray.length / 2)];
    return (medLeft + medRight) / 2;
  } else {
    return numArray[Math.floor(numArray.length / 2)];
  }
}

/**
 * Take an array of numbers and find the most frequently occurring
 * @param {Array} numArray an array of numbers
 */
function getMode(numArray) {
  if (numArray.length === 0) return null;

  let dict = {};

  for (let i = 0; i < numArray.length; i += 1) {
    if (numArray[i] in dict) {
      dict[numArray[i]] += 1;
    } else {
      dict[numArray[i]] = 1;
    }
  }

  let mostFrequent;
  let count = 0;

  for (let key in dict) {
    if (dict[key] > count) {
      mostFrequent = key;
      count = dict[key];
    }
  }

  return Number(mostFrequent);
}

module.exports = {
  processNumArray,
  getMean,
  getMedian,
  getMode,
};
