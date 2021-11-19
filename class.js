class Notebook {
    constructor(name, price, company) {
        this.name = name
        this.price = price
        this.company = company
    }
}

const notebook1 = new Notebook('Macbook', 2000000, 'Apple')

console.log(notebook1)  // Notebook { name: 'Macbook', price: 2000000, company: 'Apple' }
console.log(notebook1.name)  //Macbook
console.log(notebook1.price)  //2000000


//@   const변수명 = new클래스명(매개변수들)   @ 중요!
//constructor(생성자) : 객체가 생성될 때 자바스크립트 내부에서 호출이 되는 함수
// this : 클래스를 사용해 만들어질 객체 자기 자신을 뜻함 this뒤에 붙는 것들은 객체의 속성