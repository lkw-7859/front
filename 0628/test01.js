// 객체속성 기술자 이해
// 4가지의 속성이 있는데 enumerable false하면 
// for문이 실행 되지 않음
// let car = {
//     name: "tesla",
//     color: ["red", "blue", "green"],
// };

// console.log(Object.getOwnPropertyDescriptor(car, "name"));
// console.log(Object.getOwnPropertyDescriptor(car, "color"));
// console.log(Object.getOwnPropertyDescriptor(car, "nothing"));

let car = {
    name: "tesla",
    color: ["red", "blue", "green"],
};

for (let key in car) {
    console.log(key);
}

console.log("enumerable false");
Object.defineProperty(car, "name", {
    value: "tesla upgrade",
    enumerable: false,
});

for (let key in car) {
    console.log(key);
}