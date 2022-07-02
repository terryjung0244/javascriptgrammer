//boolean type
let 참 = true;
let 거짓 = false;

console.log(참);
console.log(거짓);

//활용예;
let isFree = true;
let isActivated = false;
let isEntrolled = true;


console.clear();

// Falshy 거짓인 값
console.log(!!0); 

//!을 사용하므로써, 콘솔로그에 true, false를 출력할수 있다.
// If the value is omitted or is 0, -0, null, false, NaN, undefined, 
// or the empty string (""), the object has an initial value of false.

// Truthy 참인 값
//All other values, including any object, an empty array ([]), 
//or the string "false", create an object with an initial value of true.