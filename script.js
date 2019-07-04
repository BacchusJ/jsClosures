//first class functions 

var years = [1990, 1965, 1937, 2005, 1998];

//lets create a new empty array 
//function will take two parameters 

function arrayCalc (arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

var ages = arrayCalc(years, calculateAge);

console.log(ages);

/*

Hello Jason

The arrayCalc() function can take two arguments - arr (which is just an array with some elements) and fn (which is a function that will be executed for each element in the array). The job of arrayCalc() function is to simply call "fn" function multiple times ("arr.length" times) and pass each element from "arr" as an argument to this function.

var years = [1990, 1965, 1937];
 
function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}
 
function calculateAge(el) {
  return 2017 - el;
}
 
var ages = arrayCalc(years, calculateAge);
In this example we passed years array as "arr" and calculateAge as "fn". We know that at the beginning of the for loop the i variable is equal to 0 and it is incremented by 1 each iteration, so in steps it would look like:

1. i = 0, arrRes.push(calculateAge(years[0])); // years[0] === 1990
 
2. i = 1, arrRes.push(calculateAge(years[1])); // years[1] === 1965
 
3. i = 2, arrRes.push(calculateAge(years[2])); // years[2] === 1937
Where years[i] is a single element from years array passed to calculateAge as "el" argument.



*/