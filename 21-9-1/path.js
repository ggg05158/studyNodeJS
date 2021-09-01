const path = require('path');

const string = __filename

console.log('path.sep:', path.sep); //경로 구분자
console.log('path.delimitier', path.delimiter); //환경 변수의 구분자
console.log('-------------------------------\n');
console.log('path.dirname()', path.dirname(string)); //위치한 폴더 경로
console.log('path.extname()', path.extname(string)); //파일의 확장자

//파일의 이름과 확장자를 표시, 이름만 표시하고 싶다면 두번째 인자로 확장자를 넣는다.
console.log('path.basename()', path.basename(string)); 
console.log('path.basename()', path.basename(string,path.extname(string)));
console.log('---------------------------------\n');

//파일의 경로를 root, dir, base, ext, name으로 분리한다.
console.log('path.parse()', path.parse(string));

//path.parse()한 객체를 파일경로로 합친다.
console.log('path.format()', path.format({
    dir: 'C:\\users\\zerocho',
    name: 'path',
    ext: '.js',
}));

// /나 \를 실수로 사용하거나 혼용했을 때 정상적인 경로로 변환
console.log('path.nomalize()', path.normalize('C://users\\\\\zerocho\\\path.js'));
console.log('---------------------------------------\n');
//파일의 경로가 절대경로인지 상대경로인지 true나 false로 알려줌
console.log('path.isAbsolute()', path.isAbsolute('C:\\'));
console.log('path.isAbsolute()', path.isAbsolute('./home'));
console.log('------------------------------------\n')
//경로 2개를 넣으면 첫번째 경로에서 두번재 경로로 가는 방법을 알려준다.
console.log('path.relative()', path.relative('C:\\users\\zerocho\\path.js','C:\\'));

//여러인자를 넣으면 하나의 경로로 합쳐줌, 상대경로인 ..(부모디렉터리), .(현위치)도 처리
console.log('path.join()', path.join(__dirname, '..', '..', '/users', '.','/zerocho'));

//join과 비슷하지만 동작방식이 다름.
console.log('path.resolve()', path.resolve(__dirname, '..', '/users', '.','/zerocho'));