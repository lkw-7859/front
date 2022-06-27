//var과 ES6에서 추가된 let과의 차이
//let는 범위와 중복볼허
if(true){
    var functionScopValue = 'global';
    let blockScopeValue = 'local';
}

console.log(functionScopValue);
console.log(blockScopeValue);