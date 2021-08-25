function longRunningTask() {
    //오래 걸리는 작업
    console.log('work end');
}

console.log('start');
setTimeout(longRunningTask,0);
console.log('next work')