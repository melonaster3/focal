const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map((object) => {
  let keys = Object.keys(object);

  return Math.sqrt((object[keys[0]] * object[keys[0]]) + (object[keys[1]] * object[keys[1]]));
  
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
