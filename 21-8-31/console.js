const string = 'abc';
const number = 1;
const boolean = true;
const obj ={
    outside: {
        inside: {
            key: 'value',
        },
    },
};
console.time('alltime'); //timeEnd와 짝지어 시간을 측정한다.
console.log('평범한 로그, 쉽표로 구분해 여러 값 표시 가능');
console.log(string, number, boolean);
console.error('에러 메세지는 .error에 담는다.');
console.dir(obj, { colors: false, depth: 2});
console.dir(obj, { colors: true, depth: 1});

console.time('시간 측정');
for(let i =0; i<10000;i++){
    continue;
}
console.timeEnd('시간 측정');

function b(){
    console.trace('에러 위치 추적');//에러가 어디서 났는지 추적 가능
}
function a(){
    b();
}
a();

console.timeEnd('alltime');