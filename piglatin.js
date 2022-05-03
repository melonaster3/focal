const arg = process.argv.slice(2);

let ans = '' ;

for (let x = 0; x < arg.length; x++) {

  let word = '';

  let first_Letter = arg[x].charAt(0);

  word = arg[x].slice(1) + first_Letter + "ay";

  ans += word + ' ';
}

console.log(ans);