
const condition = true;
const promise = new Promise((resolve, reject) => { //new로 promise객체 생성
    if (condition){
        resolve('성공');
    }
    else {
        reject('실패');
    }
});

/*   //기본 promise 구문
promise
    .then((message) =>{
        console.log(message);
    })
    .catch((error)=> {
        console.error(error);
    });
*/

promise
    .then((message)=>{
        return new Promise((resolve, reject)=> {
            resolve(message);
        });
    })
    .then((message2)=>{
        console.log(message2);
        return new Promise((resolve, reject)=>{
            resolve(message2);
        });
    })
    .then((message3)=>{
        console.log(message3);
    })
    .catch((error)=>{
        console.error(error);
    });


