//for == in 기능
const store = {snack : 1000, flower : 5000, beverage : 2000};

for(var item in store){ //item은 키 store[item]은 값  
    if(!store.hasOwnProperty(item)) continue;

    console.log(item + '는 가격이 '+ store[item] + '입니다.'); 
}