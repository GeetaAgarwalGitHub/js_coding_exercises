function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  const newArr = nums.map(function (item) {
    return item * item;
  });

  return newArr;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const newArr = words.reduce(function add(accumulator, word, index) {
    if (index == 0)
      return accumulator + word.substring(0, 1).toLowerCase() + word.substring(1).toLowerCase();
    else
      return accumulator + word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }
  );
  return newArr;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  const totalSubjects = people.reduce(function addSubjects(total, person) {
    return total+ person.subjects.length;
  },0);
  return totalSubjects;
  
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  //varaible to store ingredients
  var ingredients;

  //iterate through each item in the menu
  for (var item = 0; item < menu.length; item++) {
    ingredients = menu[item]['ingredients']

    //iterate through each ingredient in the item 
    for (var i = 0; i < ingredients.length; i++) {

      //if required item found then reutrn true
      if (ingredients[i].toString().toLowerCase().includes(ingredient.toString().toLowerCase()))
        return true;
    }


  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  //variable to store the lengths;
  var arr1Len = arr1.length;
  var arr2Len = arr2.length;

  //variables to store the sorted array , index and a flag to indicate if the item has already been added to the array
  var resultArray = new Array();
  var flag = false;


  //iterate through each element in first array
  for (var i = 0; i < arr1.length; i++) {

    //iterate through each element in secodn array
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {

        //reset flag
        flag = true;

        //iterate through each element in result array
        for (var k = 0; k < resultArray.length; k++) {

          //if element already exixts in reslt array do nothing and set flag to false
          if (resultArray[k] == arr1[i]) {
            flag = false;
            break;
          }
        }
        //if elememt not in result array
        if (flag == true) {

          //insert the element in sorted manner
          resultArray = insert(arr1[i], resultArray);
          flag = true;
          break;
        }

      }
    }
  }

  return resultArray;
}


function insert(element, array) {
  array.push(element);
  array.sort(function (a, b) {
    return a - b;
  });
  return array;
}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
