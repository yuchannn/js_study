'use strict';

// JSON.stringify 실습 1
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

// JSON.stringify 실습 2

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate: new Date(),
    jump: () => {  // 함수는 data 아니기에 json에 포함 안됨.
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["color"]);
console.log(json);


// 추가 실습 (발표에 포함 x)
/*
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return value;
});
console.log(json);
*/


// JSON.parse 실습1

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);


// JSON.parse 실습2
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
}); // 함수 포함 안됨.
console.log(obj);

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());