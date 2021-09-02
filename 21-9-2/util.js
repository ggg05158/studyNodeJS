const util = require('util');
const crypto = require('crypto');

//함수가 deprecated처리 되었음을 알려준다.
//첫 번째 인자 함수를 사용했을 때 두 번째 인자인 경고 메시지가 표시된다.
const dontUseMe = util.deprecate((x,y)=>{
    console.log(x+y);
},'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1,2);

//콜백 패턴을 프로미스 패턴으로 바꿔준다. 바꿀 함수를 인자로 사용하면 된다.
const randomBytesPromise  = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) =>{
        console.log(buf.toString('base64'));
    })
    .catch((error)=>{
        console.error(error);
    });