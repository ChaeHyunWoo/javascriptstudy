console.log('My' + 'car') // My car 출력
console.log('1' + 2) // 12 출력

const jacketPrice = 200000
console.log(`이 자켓 가격은 ${jacketPrice}원 입니다 고객님`)
// 백틱(``)을 사용해 간결하게 문자열을 붙여 문자열 데이터를 표현

//산술연산자

console.log(2+1) //3
console.log(2-1) // 1
console.log(6/2) // 3
console.log(4*4) // 16
console.log(5%3) // 5나누기 3의 나머지 2를 출력
console.log(5**2) // 5의 2승 25를 출력

//증감연산자

let count = 1
const number = ++count

console.log(`count : ${count}, number : ${number}`) 
//결과 -> count:2 , number:2
//Tip  ++숫자  증감연산자가 앞에 있으면 먼저 자기 자신에게 1을 더해 재할당 후 이를 number에 할달했다는 의미

let count1 = 1
const number1 = count1++

console.log(`count1 : ${count1}, number1 : ${number1}`) 
// 결과 -> count1 : 2 , number1: 1
//Tip 숫자++ 증감연산자가 뒤에 있으면 number에 자신의 값을 먼저 할당하고, 이후에 1을 더해서 재할당

// const 대신 let을 사용한 이유는 증감연산자를 통해 count값을 계속 증가시키고 다시 count에
//할당하기에 const를 사용하면 에러 발생 const는 재할당x일때 사용


//대입 연산자

const shosePrice = 80000
const shirtPrice = 120000
let totalPrice = 0

totalPrice += shosePrice
console.log(totalPrice)
// 결과:80000   totalPrice + shosePrice 와 동일
totalPrice += shirtPrice
console.log(totalPrice)
// 결과:200000   totalPrice + shirtPrice와 동일/위에서 토탈값이 8만이 들어간 상태라 8+12
totalPrice -= shosePrice
console.log(totalPrice)
// 결과:120000   totalPrice - shosePrice와 동일 / 위에서 토탈값이 20만이 되었고, 거기서 shosePrice 8만은 뺌