const loopyLighthouse = function(range, multiples, words) {

  let arr = [];

  for (let x = range[0]; x <= range[1]; x++) {
    let num;
    if (x % multiples[0] === 0 && x % multiples[1] !== 0) {
      num = words[0];
    } else if (x % multiples[1] === 0 && x % multiples[0] !== 0) {
      num = words[1];
    } else if (x % multiples[0] === 0 && x % multiples[1] === 0) {
      num = words[0] + words[1];
    } else {
      num = x;
    }
    arr.push(num);
  }

  for (let y = 0; y < arr.length; y++) {
    console.log(arr[y]);
  }

};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
