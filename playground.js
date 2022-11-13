console.log('palyground');
const compse = (...fns) => (initvalue) => fns.reduce((val,fn) => fn(val) , initvalue);
const add2 = (n) => n+2;
const squer =(n) => n*n;
let add2andsquer = (n) => squer(add2(n));
console.log(add2andsquer(16))

let add2andsquerCompose =compse(add2,squer);
console.log(add2andsquerCompose(16));


