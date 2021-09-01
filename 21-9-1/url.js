const url =require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anhor');
console.log('new URL():',myURL);

//.format : 분해됐던 url객체를 원래 상태로 조립
console.log('url.format():',url.format(myURL));
console.log('-------------------------------');

//주소를 분해
const parsedURL = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedURL);
console.log('url.format():', url.format(parsedURL));

