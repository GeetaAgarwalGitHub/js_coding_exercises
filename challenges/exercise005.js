const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const indexOfN = nums.indexOf(n);
  const len = nums.length;

  return ( indexOfN >=0 & indexOfN < len-1 )? nums[indexOfN+1] : null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  //Object to store 0s and 1s    
  var myObjectOf0sand1s = {
    1: null,
    0: null
  };

  //variables to count 0s and 1s
  var numberOf0s = 0;
  var numberof1s = 0;

  //iterate through char in string
  for (let i = 0; i < str.length; i++) {
    //if char is 1 then increment counter for 1
    if (str[i].includes('1'))
      numberof1s++;
    //else increment counter for 0
    if (str[i].includes('0'))
      numberOf0s++;

  }

  //update counts of 0s and 1s in object
  myObjectOf0sand1s['1'] = numberof1s;
  myObjectOf0sand1s['0'] = numberOf0s;

  //return object
  return myObjectOf0sand1s;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  //variable to store the result
  var result = '';

  //convert the number to string and save its length
  var number = n.toString();
  var numberOfDigits = number.length;

  //variable to store the first non 0 digit
  var firstNon0Digit = null;

  //iterate through each digit in n
  for (let i = numberOfDigits; i > 0; i--) {

    //when first non 0 digit found , set a flag to ignore the preceding 0s
    if (!number[i - 1].includes('0') > 0 && firstNon0Digit == null)
      firstNon0Digit = i - 1;

    //add result to string if its not a number beginning with 0
    if (firstNon0Digit != null)
      result = result + number[i - 1];

  }
  return Number(result);

};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");


  //variable to store the result
  var total = 0;

  //iterate through each array in arra
  for (let i = 0; i < arrs.length; i++) {

    //iterate through each array in the array
    for (let j = 0; j < arrs[i].length; j++) {
      //add to total
      total = total + arrs[i][j];
    }
  }

  //return sum
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  //variable to store the result
  var resultArray = new Array();

  //variable to store the length
  var arrLength = arr.length;

  //if there are less then 2 items, just return arr as it is
  if (arrLength < 2)
    return arr;

  //Put last element of arr into first element of result
  resultArray[0] = arr[arrLength - 1];

  //iterate through all element of the arr starting from second element to second last element and add them to the result array
  for (let i = 1; i < arrLength - 1; i++)
    resultArray[i] = arr[i];

  //Put first element of arr into last element of result
  resultArray[arrLength - 1] = arr[0];

  //return result
  return resultArray;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");


  //iterate through each property 
  for (let currProperty in haystack) {

    //if the key contains search term then reurn true
    if (haystack[currProperty].toString().toLowerCase().includes(searchTerm.toLowerCase()))
      return true;
  };
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  //variable to store the string as array
  //we re only storing alphanumeric string..everythign else is ignored
  var strArray = str.replace(/[^A-Za-z0-9\s]/g, "").replace(/\s{2,}/g, " ").toString().split(' ');

  //create new object for result
  var resultObject = new Object();

  //variable to store the count of words in object
  var j = 0;

  //iterate through each word in the array
  for (let i = 0; i < strArray.length; i++) {

    //check the count of words in object
    j = checkCountIfKeyExists(resultObject, strArray[i])

    //if count is not 0 then then increment count
    if (j > 0)
      resultObject[strArray[i].toLowerCase()] = j + 1;
    else
      //else add key and value
      resultObject[strArray[i].toLowerCase()] = 1;
  }

  //return object
  return resultObject;
};

function checkCountIfKeyExists(resultObject, str) {
  for (var currProperty in resultObject) {

    if (currProperty.toString().toLowerCase() == str.toLowerCase())
      return Number(resultObject[currProperty]);


  };
  return 0;
}
module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
