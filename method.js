class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    printInfo() {
        console.log(`name: ${this.name}, price: ${this.price}`)
    }
}

const notebook = new Product('Macbook', 2000000)

notebook.printInfo()

// 결과값     name: Macbook, price : 2000000
