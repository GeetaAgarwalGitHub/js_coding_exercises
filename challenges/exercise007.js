/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");

  const arr = n.toString().split('')

  return Number(arr.reduce((function (sum, number) {
    return Number(sum) + Number(number);
  })))


};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");

  //variable to store the result array and index
  let resultArray = new Array();
  let index = 0;

  //iterate through each number starting at start to end adding the step counter
  for (let i = start; i <= end; i = i + step) {
    resultArray[index] = i;
    index++;
  }
  return resultArray;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */


const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  let screenTime;
  let currObject;
  let count = 0;
  let resultArray = new Array();
  let index = 0;

  //iterate through each user in the users
  for (let user = 0; user < users.length; user++) {
    screenTime = users[user]['screenTime'];

    //iterate through each screentime object
    for (let i = 0; i < screenTime.length; i++) {

      //save the usage object
      if (screenTime[i]['date'] == date) {
        currObject = screenTime[i]['usage'];

        //add total usage for each user
        for (var currProperty in currObject) {
          count = count + currObject[currProperty];
        }

        //if usage over 100 minutes add username to result array
        if (count > 100) {
          resultArray[index] = users[user]['username'];
          count = 0;
          index++;
          break;
        }
      }

    }
  }
  return resultArray;


};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexStr);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return 'rgb(' + r + "," + g + "," + b + ')';
  }
  return null;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  var resultArrayForX = new Array;
  var indexForX = 0;
  var resultArrayFor0 = new Array;
  var indexFor0 = 0;
  var winner = '';


  //possible combimations to be a winner
  var resultArray = [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [0, 2, 4],
    [2, 2, 2]
  ]


  //iterate through each row of the board
  for (let i = 0; i < 3; i++) {

    //iterate through each column on the board
    for (let j = 0; j < 3; j++) {

      //if X then save the position
      if (board[i][j] == "X") {
        resultArrayForX[indexForX] = i + j;
        indexForX++;
      }


      //if 0 then save the position
      if (board[i][j] == "0") {
        resultArrayFor0[indexFor0] = i + j;
        indexFor0++;
      }
    }
  }

  //loop through eahc combination in the resultArray to see if any of the combinations match
  //if yes, then save the winner
  for (let k = 0; k < resultArray.length; k++) {
    if (resultArrayForX[0] == resultArray[k][0] && resultArrayForX[1] == resultArray[k][1] && resultArrayForX[2] == resultArray[k][2])
      winner = winner + 'X';
    if (resultArrayFor0[0] == resultArray[k][0] && resultArrayFor0[1] == resultArray[k][1] && resultArrayFor0[2] == resultArray[k][2])
      winner = winner + '0';

  }
  return winner;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
