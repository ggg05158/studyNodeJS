const crypto = require('crypto');

const iv = new Buffer.alloc(16,'encodingkey','utf8');
//crypto.createCipher(알고리즘,키) : 사용 가능한 알고리즘 목록은 getCipher()
const key = crypto.scryptSync('열쇠','salt', 32);
const cipher = crypto.createCipheriv('aes-256-cbc', key,iv);

//cipher.update(문자열, 인코딩, 출력 인코딩) : 암호화할 대상과 대상의 인코딩,
//출력 결과물의 인코딩을 넣는다 보통 utf8인코딩, base64함호를 사용한다.
let result = cipher.update('암호화할 문장','utf8','base64');

//cipher.final(출력 인코딩) : 출력 결과물의 인코딩을 넣어주면 암호화가 완료.
result +=cipher.final('base64');
//console.log(cipher.final('base64'));

console.log('암호화:',result);

//crypto.ceateDecipher(알고리즘,키) : 복호화할 때 사용하고
// 암호화할 때 사용했던 알고리즘과 키를 그대로 넣어야한다.
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

/*decipher.update(문자열, 인코딩, 출력 인코딩) : 암호화 된 문장
 그 문장의 인코딩, 복호화할 인코딩을 넣어준다. createCipher에 update에서 
 utf8, base64 순서로 넣었다면 createDecipher에는 반대로 넣어준다.
*/
let result2 = decipher.update(result, 'base64', 'utf8');

//decipher.final(출력 인코딩) : 복호화 결과물의 인코딩을 넣어준다.
result2 += decipher.final('utf8');
console.log('복호화:', result2);