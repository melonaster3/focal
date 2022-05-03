const args = process.argv.slice(2);

for (let x = 0; x < args.length; x++) {
  let word = '';
  for (let y = args[x].length - 1; y > -1; y--) {
    word += args[x][y];
  }
  args[x] = word;
}

for (let z = 0; z < args.length; z++) {
  console.log(args[z]);
}
