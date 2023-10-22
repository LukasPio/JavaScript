class Product {

    constructor(name, description, price) {

        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    } 

    addToStock (quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discount) {

    this.price -= (this.price * discount)       

    }
}

const bisnaguinha = new Product ('Bisnaguinha', 'Um pão compacto e delicioso', 10)

console.log(bisnaguinha)

bisnaguinha.addToStock(10)
bisnaguinha.calculateDiscount(0.8)

console.log(bisnaguinha)