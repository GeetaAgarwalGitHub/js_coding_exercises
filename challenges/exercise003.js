function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  const newArr = nums.map(item => item * item);

  return newArr;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const newArr = words.reduce(function add(accumulator, word, index) {
    return (index == 0) ?  accumulator + word.substring(0, 1).toLowerCase() + word.substring(1).toLowerCase() : accumulator + word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  });

  return newArr;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  const totalSubjects = people.reduce(function addSubjects(total, person) {
    return total + person.subjects.length;
  }, 0);

  return totalSubjects;

}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");


  const foundIngredients = menu.filter(item => { 
    return item.ingredients.includes(ingredient) 
  })

  return foundIngredients.length > 0

}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  return [... new Set(arr1.filter(value => arr2.includes(value)))].sort()

}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
