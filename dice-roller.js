const args = process.argv[2];

const rollDice = function (num) {
  let arr = [];
  while (num != 0){
    arr.push(getRandomInt());
    num --;
  }
  return arr;
}

const getRandomInt = function () {
  return Math.floor(Math.random() * (7-1) + 1);
}

const convertArr = function (arr) {
  let string = '';
  for (let x = 0; x < arr.length; x++) {
    if (x == arr.length - 1) {
      string += arr[x];
    } else {
      string += arr[x] + ', '
    }
  }
  return string; 
}

const declareAnswer = function () {
  console.log(`Rolled ${args} dice: ${convertArr(rollDice(args))}`);
}

declareAnswer();