function longRunningTask() {
    //오래 걸리는 작업
    console.log('work end');
}

console.log('start');
longRunningTask();
console.log('next work')