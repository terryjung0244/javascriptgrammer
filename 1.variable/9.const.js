// let 재할당 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수(constant variable) 또는 변수

//변경은 가능하다. Mutable

// const text = 'hello';
// text = 'hi'; // 이렇게 하면 안됨!

const apple = {
  fruit: 'apple',
  color: 'red',
  display: 'redImage'
}

console.log(apple);

apple.fruit = 'greenApple'

console.log(apple);

// 객체에서 value의 값은 변경이 가능하다. Mutable. 