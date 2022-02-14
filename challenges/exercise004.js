function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(num => num < 1)

}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  return names.filter(name => name.substring(0,1).toLowerCase().includes(char.toString().toLowerCase()))
 
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");


  //variable to store the result array
  var resultArray = new Array();
  var index = 0;

  //iterate through each word in array
  for (let i = 0; i < words.length; i++) {

    //if word is to
    if (words[i].trim().substring(0, 3).toLowerCase().includes('to ')) {
      //add to result array
      resultArray[index] = words[i];
      index++;
    }
  }
  return resultArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  //variable to store the result array
  var resultArray = new Array();
  var index = 0;

  //iterate through each number in nums#
  for (let i = 0; i < nums.length; i++) {

    //if number less than 1 add it to result array
    if (!nums[i].toString().includes('.')) {
      resultArray[index] = nums[i];
      index++;
    }
  }
  return resultArray;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  //variable to store the result array
  var resultArray = new Array();
  var index = 0;
  for (let i = 0; i < users.length; i++) {
    resultArray[index] = users[i]['data']['city']['displayName'];
    index++;
  }
  return resultArray;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");


  //variable to store the result array
  var resultArray = new Array();
  var index = 0;
  var sqrt = 0;

  //iterate through each number in nums
  for (let i = 0; i < nums.length; i++) {

    //get the square root
    sqrt = Math.sqrt(nums[i]);

    //if square root has decimal, round it two places
    if (sqrt.toString().includes('.')) {
      sqrt = sqrt.toFixed(2);
    }

    //add result to array
    resultArray[index] = Number(sqrt);
    index++;

  }
  return resultArray;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");


  //variable to store the result array
  var resultArray = new Array();
  var index = 0;

  //iterate through each sentence in array
  for (let i = 0; i < sentences.length; i++) {

    //if sentencehas required string
    if (sentences[i].toLowerCase().includes(str.toLowerCase())) {

      //add result to array
      resultArray[index] = sentences[i];
      index++;
    }
  }
  return resultArray;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");



  //variable to store the result array
  var resultArray = new Array();
  var index = 0;
  var currLongerSide = 0;

  //iterate through each traingle in array
  for (let i = 0; i < triangles.length; i++) {
    //iterate through each length for the triangle
    for (let j = 0; j < 3; j++) {
      //if current length is longer then save it
      if (triangles[i][j] > currLongerSide)
        currLongerSide = triangles[i][j];
    }

    //add longer side to result array
    resultArray[index] = currLongerSide;
    currLongerSide = 0;
    index++;
  }
  return resultArray;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
