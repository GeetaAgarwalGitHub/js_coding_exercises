function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.substring(0,1).toUpperCase() + word.substring(1)
}


function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return (firstName.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase());
}


function addVAT(originalPrice, vatRate) {

  //if either the original price or VatRate are null return error message
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  var result = 0;

  //Calculate the vat to be added
  var vatToBeAdded = originalPrice * vatRate / 100;

  //add vat to original amount
  result = originalPrice + vatToBeAdded;

  //if the result has a decimal point, round it up to 2 places
  if (result.toString().includes('.'))
    result = result.toFixed(2);


  //Convert the result to Number and return
  return Number(result);
}

function getSalePrice(originalPrice, reduction) {

  //if either the original price or VatRate are null return error message
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");


  var result = 0;

  //Calculate the vat to be added
  var amounToBeDeducted = originalPrice * reduction / 100;

  //add vat to original amount
  result = originalPrice - amounToBeDeducted;

  //if the result has a decimal point, round it up to 2 places
  if (result.toString().includes('.'))
    result = result.toFixed(2);


  //Convert the result to Number and return
  return Number(result);

}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const len = str.length;

  //if small string return as it is
  if (len == 1 || len == 2)
    return str;

  //if the length is even remainder will be 0 so return middle 2 characters
  if (len % 2 == 0)
    return ((str.charAt((len / 2) - 1) + str.charAt((len / 2))));
  else
    //if the length is even return the middle character 
    return (str.charAt(len / 2));

}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split('').reverse().join('')

}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  var count = words.length;
  var resultString = new Array();
  var reversedWord = '';



  
  //iterate through each element in the array
  for (let i = 0; i < count; i++) {
    //ititerate through each character in the current array element
    for (let j = words[i].length; j > 0; j--) {
      //append each to variable
      reversedWord = reversedWord + words[i].charAt(j - 1);
    }

    //add the reversed word to the result array
    resultString[i] = reversedWord;
    reversedWord = '';
  }

  return resultString;

}


function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  return users.filter( users =>users.type.toUpperCase () == 'LINUX').length

}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");



  var sum = 0;
  var mean = 0;

  sum =  scores.reduce((a, b) => a + b, 0)

  //calculate the mean
  mean = sum / scores.length;

  //round up to 2 decimal places if the result has a decimal point
  if (mean.toString().includes('.'))
    mean = mean.toFixed(2);

  return Number(mean);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  //store the remainders when number divided by 3 & 5
  const isDivisibleBy3 = n % 3;
  const isDivisibleBy5 = n % 5;

  //return according to remainder
  if (isDivisibleBy3 == 0 && isDivisibleBy5 == 0)
    return 'fizzbuzz';
  else if (isDivisibleBy3 == 0)
    return 'fizz';
  else if (isDivisibleBy5 == 0)
    return 'buzz';
  else if (isDivisibleBy3 != 0 && isDivisibleBy5 != 0)
    return n;

}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
