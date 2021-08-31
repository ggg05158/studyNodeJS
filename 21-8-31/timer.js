const timeout = setTimeout(()=>{
    console.log('1.5초 후 실행');// 1번
}, 1500);

const interval = setInterval(()=>{
    console.log('1초마다 실행'); //2번
}, 1000);

const timeout2 = setTimeout(()=> {
    console.log('실행되지 않습니다.');//3번
},3000);

setTimeout(()=>{// 4번
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(()=>{//5번
    console.log('즉시 실행');
});

const immediate2 = setImmediate(()=>{//6번
    console.log('실행되지 않습니다.');
});

clearImmediate(immediate2); //7번