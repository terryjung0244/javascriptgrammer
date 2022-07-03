// Primitive type은 값이 복사되어 copy by value 전달됨.

let a = 1;
let b = a; //b = 1;
b = 2;

console.log(a);
console.log(b);

// Object type은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨. copy by reference

let apple = {
  name: 'apple' //0x1234
}

let orange = apple; //0x1234 메모리주소가 복사되어서 전달된다.

orange.name = 'orange' //이름을 오렌지로 바꾼다면? 바뀐다.

console.log(apple);
console.log(orange);