const assert = require('assert')


/**
 * Complete the function such that it returns true if an object or any of its
 * subobjects have any falsy values and false otherwise.
 * HINT: Recursion may help here
 * HINT 2: Get the truthiness of a value by using a double bang (!!),
 *    or the untruthiness using a single bang (!)
 */

const hasFalsyValue = obj => {
  let result = false
  Object.keys(obj).forEach((element) => {
    if (!obj[element]){
      result = true
    }
    else if (typeof obj[element] === 'string' || obj[element] instanceof String){
      result = false
    }
    else if (hasFalsyValue(obj[element])){
      result = true
    }
  })
  return result
};

const basicTest = {
  a: 123,
  b: 123,
  c: 123,
  d: {
    e: 123,
    f: {
      g: 0
    }
  }
};

const basicTest2 = {
  a: "I am falsy somewhere...",
  b: 23,
  c: true,
  d: {
    e: 'nuthin to look at here...0',
    f: {
      g: 'hello'
    }
  }
};

const falsyObj = {
  hi: "I am falsy somewhere...",
  "i'm an number": 23,
  "i'm a boolean": true,
  "i'm an object": {
    aint: 'nuthin to look at here...',
    keeplooking: {
      oops: 0
    }
  }
};

const truthyObj = {
  truthy: true,
  stillTruthy: -1,
  yup: "this is truthy",
  anotherOne: {
    anotherTruthy: ";)"
  }
};

assert(hasFalsyValue(basicTest) === true);
assert(hasFalsyValue(basicTest2) === false);
assert(hasFalsyValue(falsyObj) === true);
assert(hasFalsyValue(truthyObj) === false);
