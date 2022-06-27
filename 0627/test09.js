// 클로저 이해하기
//increase함수와 getCount함수는 createCounter 실행 컨텍스트의
//렉시컬 환경을 기억하고 있는 클로저가 됨
function createCounter(){
    let count=0;
    return{
        increase : function(){
            count++;
        } ,
        getCount : function(){
            return count;
        }
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increase();
counter1.increase();
console.log('counter1의 값 : ' + counter1.getCount());
counter2.increase();
console.log('counter2의 값 : ' + counter2.getCount());