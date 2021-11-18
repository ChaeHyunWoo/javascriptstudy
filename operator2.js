//비교연산자

console.log(1<3) // 1이 3보다 작음 true
console.log(2 <= 2) // 2가 2보다 크거나 같다 true
console.log(1>3) // 1이 3보다 크다 false
console.log(1 >= 3) // 1이 3과 같거나 크다 false

//논리연산자

let isOnSale = true
let isDiscountItem = true

console.log(isOnSale && isDiscountItem) // true && true 이므로 true
console.log(isOnSale || isDiscountItem) // true || true 이므로 true

isOnSale = false
console.log(isOnSale && isDiscountItem) // false && true 이므로 false
console.log(isOnSale || isDiscountItem) // false || true 이므로 true

isDiscountItem = false
console.log(isOnSale && isDiscountItem) // false && false 이므로 false
console.log(isOnSale || isDiscountItem) // false || false 이므로 false

console.log(!isOnSale) // !false 이므로 true
// ||(or)는 하나만 참이여도 true
// &&(and)는 모두 참이여야 true
// !(not)는 참을 거짓으로, 거짓을 참으로 바꿔서 리턴  

//일치연산자

console.log(1 === 1) // true
console.log(1 === 2) // false
console.log('Javascript' === 'Javascript')
 // true
console.log('Javascript' === 'javascript')
// 대소문자나 띄워쓰기도 다 정확히 일치해야함 따라서 false
//일치연산자에는 '=='와 '===' 존재
// '==='는 정확히 일치해야함 true리턴  '=='는 자바스크립트에서 값이 일치하지 않을 때
//해당 값의 데이터타입을 자동으로 변환해주는 특성이 있어 거의 사용하지 않음 @중요@