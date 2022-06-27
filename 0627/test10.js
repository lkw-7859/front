// get, set을 통한 속성 접근 관리
// let user = {};
// Object.defineProperty(user,"_age",{
//     get:function(){
//         return this._age;
//     },
//     set:function(age){
//         if(age < 0){
//             this._age=age;
//         }
//     },
//     enumerable : true
// });
// user._age=10;
// console.log(user._age);
// user._age=-1;

let user2 = {
    get name(){
        return this._name;
    },
    set name(val){
        if(val.length < 3){
            throw new Error('3자 이상이어야 합니다.');
        }
        this._name = val;
    }
}
user2.name='harin';
console.log(user2.name);
user2.name('ha');