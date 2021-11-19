class Cloth {
    constructor(color, size, price) {
        this.color = color
        this.size = size
        this.price = price
    }

    printInfo() {
        console.log(`색: ${this.color}, 사이즈: ${this.size}, 가격:${this.price}`)
    }
}

const jacket = new Cloth('black', 'L', '130000')
const shirts = new Cloth('blue', 'M', '70000')

jacket.printInfo()
shirts.printInfo()

