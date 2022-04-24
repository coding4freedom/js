
/*
Very simple, given an integer or a floating-point number, 
find its opposite.

1: -1
14: -14
-34: 34
*/

function opposite(number) {
    //your code here
    Math.sign(number) === 1 || Math.sign(number) === 0 ? number = -(number) : number = Math.abs(number)
    return number
  }