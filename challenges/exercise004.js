function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(num => num < 1)
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  return names.filter(name => name.substring(0, 1).toLowerCase().includes(char.toString().toLowerCase()))
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  return words.filter(word => word.substring(0, 3).toLowerCase().includes('to '))
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(num => !(num.toString().includes('.')))
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  return users.map(user => user.data.city.displayName)
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.map(num => Math.round(Math.sqrt(num) * 100) / 100)
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  return sentences.filter(sentence => sentence.toLowerCase().includes(str.toLowerCase()))
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  return triangles.map(sides => Math.max(...sides))
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
