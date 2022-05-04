const args = process.argv.slice(2);

const obfuscate = function(arr) {
  let string = arr[0].toString();

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === "a") {
      string = string.slice(0,i) + '4' + string.slice(i + 1,string.length);
    } else if (string.charAt(i) === "e") {
      string = string.slice(0,i) + '3' + string.slice(i + 1,string.length);
    } else if (string.charAt(i) === "o") {
      string = string.slice(0,i) + '0' + string.slice(i + 1,string.length);
    } else if (string.charAt(i) === "l") {
      string = string.slice(0,i) + '1' + string.slice(i + 1,string.length);
    }
  }

  return console.log(string);
};

obfuscate(args);