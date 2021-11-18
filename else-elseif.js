//else문

const shoesPrice = 50000
if (shoesPrice < 40000) { 
	console.log('신발을 사겠습니다.')
} else {
	console.log('너무 비싸요. 신발을 사지 않겠습니다.') // 신발 가격이 40000원보다 작지 않으므로 해당 코드가 실행됨
}
//if문이 만족하지 않으면 else문 실행

//else if문

const shoesPrice = 50000
if (shoesPrice < 40000) { 
	console.log('신발을 사겠습니다.')
} else if (shoesPrice <= 50000) {
	console.log('고민을 해볼게요...')  // 신발 가격이 50000원보다 작거나 같으므로 않으므로 해당 코드가 실행됨
} else {
	console.log('너무 비싸요. 신발을 사지 않겠습니다.')
}
//else if문을 사용하면 더많은 조건을 판단가능 if가 아니면 else if, else if도 아니면 else 실행
