/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");


  //varaibles to store the remainders when number divided by 3 & 5
  var isDivisibleBy3;
  var isDivisibleBy5;

  //variable to store the sum of numbers divisible by 3 or 5
  var totalSum = 0;

  for (var i = 0; i < arr.length; i++) {
    //store the remainders when number divided by 3 & 5
    isDivisibleBy3 = arr[i] % 3;
    isDivisibleBy5 = arr[i] % 5;


    //if remainder is 0 add to the total
    if (isDivisibleBy3 == 0 || isDivisibleBy5 == 0)
      totalSum = totalSum + arr[i];


  }
  //return total
  return totalSum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");

  //variable to convert the string to lowercase
  var DNA = str.toString().toLowerCase();

  //iterate through each char in string
  for (var i = 0; i < DNA.length; i++) {

    //IF not A, C, G, T return false
    if (!DNA[i].includes('c') && !DNA[i].includes('g') && !DNA[i].includes('t') && !DNA[i].includes('a'))
      return false;
  }

  //else return true
  return true;

};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");

  if (!isValidDNA(str))
    return ('Invalid DNA!!');

  //object saves the pair as key value
  var DNAObject = {
    T: "A",
    C: "G",
    A: "T",
    G: "C"
  }

  //variable to store the result
  var resultBaseDNA = '';

  //iterate through each character in string and get value based on key in DNA object
  for (var i = 0; i < str.length; i++) {
    resultBaseDNA = resultBaseDNA + DNAObject[str[i].toUpperCase()];

  }
  return resultBaseDNA;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");

  //return false if negative number
  if (n <= 1) return false;

  //if even number then not prime
  if (n % 2 == 0 && n > 2)
    return false;

  // store the square to loop faster
  const s = Math.sqrt(n);
  //iterate through each number from 3 to square root
  for (let i = 3; i <= s; i += 2) {
    //if remainder is 0 means not primt
    if (n % i === 0)
      return false;
  }
  return true;
};


/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  var ResultArray = new Array();
  var subArray = new Array();

  //iterate 0 through n to creat arrays
  for (i = 0; i < n; i++) {

    //fill the subarrays with content

    for (j = 0; j < n; j++)
      subArray[j] = fill;

    //add subarray to result
    ResultArray[i] = subArray;
  }
  return ResultArray;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  //variable to save the number of staff
  var numberOfStaff = 0;

  //iterate through each staff
  for (var i = 0; i < staff.length; i++) {
    //if the rota contains the required day, increment counter
    if (staff[i]['rota'].toString().toLowerCase().includes(day.toLowerCase()))
      numberOfStaff++;

  }

  //if number of staff are less than 3 return false
  if (numberOfStaff >= 3)
    return true;

  //else return true
  else
    return false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
