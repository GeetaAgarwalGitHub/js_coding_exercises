const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const indexOfN = nums.indexOf(n);
  const len = nums.length;

  return (indexOfN >= 0 & indexOfN < len - 1) ? nums[indexOfN + 1] : null;
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

  //convert the number to string array
  const strArr = n.toString().split('');

  //reverse the array and return the joined string
  return Number(strArr.reverse().join(''))

};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  return arrs.flat().reduce((d, i) => d + i)

};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  //if there are less then 2 items, just return arr as it is
  if (arr.length < 2)
    return arr;

  //swap elements
  arr.splice(0, 1, arr.splice(arr.length - 1, 1, arr[0])[0]);
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");


  //iterate through each property 
  for (let currProperty in haystack) {

    //if the key contains search term then reurn true
    if (haystack[currProperty].toString().toLowerCase().includes(searchTerm.toLowerCase()))
      return true;
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  //remove special characters
  str = str.replace(/[^A-Za-z0-9\s]/g, "").replace(/\s{2,}/g, " ").toString();

  const strArr = str.split(' ');
  var counts = {}, i, value;

  for (i = 0; i < strArr.length; i++) {
    value = strArr[i].toLowerCase();
    if (typeof counts[value.toLowerCase()] === "undefined") {
      counts[value] = 1;
    } else {
      counts[value.toLowerCase()]++;
    }
  }

  return counts;
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
