let x = 5; //숫자형
let y = 'five'; // 문자형
var isTrue = true; //불린형
var empty = null; //null
var nothing;
var sym = Symbol('me');

var item = {
    price : 5000,
    count : 10
} // 객체

let fruits = ['apple', 'orange', 'kiwi'];
let addFruit = function(fruit){
    fruits.push(fruit);
} // 함수
addFruit('watermelon'); //함수실행
console.log(fruits); // 콘솔 출력