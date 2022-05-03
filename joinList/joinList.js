const joinList = function (list) {
  let output = '';
  for (let x = 0; x < list.length; x++) {
    if(x != list.length-1) {
      output += list[x] + ', ';
    } else {
      output += list[x];
    }
  }
  return output === '' ? 'nothing' : output;
};
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const conceptList1 = [];
const concepts = joinList(conceptList1);
console.log(`Today I learned about ${concepts}.`);
