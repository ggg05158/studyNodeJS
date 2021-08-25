function run(){
    console.log('3초 후 실행');
}
console.log('start');

//setTime(a,b) => a를 b(ms)뒤에 실행한다.
setTimeout(run, 3000)
console.log('end');