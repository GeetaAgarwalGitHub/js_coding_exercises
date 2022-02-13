function getFillings(sandwich) {

  if (sandwich === undefined) throw new Error("ingredients is required");

  //return the fillings in the sandwich
  return sandwich['fillings']
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  //If city is Manchester return true else return false
  return person['city'].toUpperCase() == 'MANCHESTER'
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  //Divide by 40 and get the the divisor for number of buses
  const NumberOfBuses = Math.floor(people / 40);

  //if remiander is not 0 then add one more bus
  if (people % 40 != 0)
    return Number(NumberOfBuses) + 1;
  else
    return NumberOfBuses;

}


function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

   return arr.filter(arr => arr.toUpperCase() =='SHEEP').length
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  //If first letter of postcode is M and city is Manchester return true else return false
  return person['address']['postCode'].substring(0, 1).toUpperCase().includes('M') && person['address']['city'].toUpperCase().includes('MANCHESTER')
   
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
