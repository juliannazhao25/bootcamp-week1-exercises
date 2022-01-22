/**
 * Part 1:
 *    What will print and why?
 *    What will change if we delete line 15? Why?
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

function x() {
  // let a = 2;
  console.log(a);
}

function y() {
  let a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();

/**
 * Part 1:
 *    What will print and why?
 *    The code will print 1, 2, undefined. The 1 is from the console.log(a) 
 *    in line 26, which prints the global variable a. The 2 is from the 
 *    console.log(a) in line 21, which prints the local variable a declared and 
 *    initiated in function y. The undefined is from the console.log(a) in line 16,
 *    which prints the local variable a declared but not initiated in function x.
 * 
 *    What will change if we delete line 15? Why?
 *    The code will print 1,2,1. Since there is no longer a declaration of a 
 *    variable a in the function, the console.log(a) in line 16 will now print the
 *    global variable, which has a value of 1.
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */