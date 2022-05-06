const countdownGenerator = function (x) {
  /* your code here */
  let countdown = x;
  return function () {
    if(countdown > 0) {
      console.log(`T-minus ${countdown}...`)
    } else if (countdown === 0) {
      console.log("Blast off!");
    } else {
      console.log("Rockets already gone, bub!")
    }
    countdown --;
  }
};

const countdown = countdownGenerator(10);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!