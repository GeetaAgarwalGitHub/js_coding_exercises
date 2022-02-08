function getFillings(sandwich) {

  if (sandwich === undefined) throw new Error("ingredients is required");

  //return the fillings in the sandwich
  return sandwich['fillings']
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  //If city is Manchester return true else return false
  if (person['city'].toUpperCase() == 'MANCHESTER')
    return true;
  else
    return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  //Divide by 40 and get the the divisor for number of buses
  var NumberOfBuses = Math.floor(people / 40);

  //if remiander is not 0 then add one more bus
  if (people % 40 != 0)
    return Number(NumberOfBuses) + 1;
  else
    return NumberOfBuses;

}


function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  //Counter for number of sheep
  var count = 0;

  //iterate through each element in the array
  for (var i = 0; i < arr.length; i++) {
    //if element is sheep then increment counter
    if (arr[i].toUpperCase().includes('SHEEP'))
      count = count + 1;
  }

  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  //If first letter of postcode is M and city is Manchester return true else return false
  if (person['address']['postCode'].substring(0, 1).toUpperCase().includes('M') && person['address']['city'].toUpperCase().includes('MANCHESTER'))
    return true;
  else
    return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
