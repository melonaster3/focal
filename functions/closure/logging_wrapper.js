const wrapLog = function (callback, name) {
  /* your code here */

  return function () {
      let typeOfFunction = name;
      let funcToPerform = callback;

      if (typeOfFunction === "area"){
        let ans = funcToPerform(arguments[0],arguments[1]);
        console.log(`${name}(${arguments[0]}, ${arguments[1]}) => ${ans}`)
      }

      if (typeOfFunction === "volume"){
        let ans = funcToPerform(arguments[0],arguments[1],arguments[2]);
        console.log(`${name}(${arguments[0]}, ${arguments[1]}, ${arguments[2]}) => ${ans}`)
      }
   

  }

};


const area = function (x, y) {
  return x * y;
};

const logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

const volume = function (x, y, z) {
  return x * y * z;
};
const logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24