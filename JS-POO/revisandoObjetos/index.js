
// PascalCase -> camelCase

function Book (tittle, tags, price, author) {

    this.tittle = tittle
    this.tags = tags
    this.price = price
    this.author = author
    this.published = false
    this.stock = 0
    this.addOnStock = () => {
        this.stock += 20
    }
    this.publish = () =>{
        this.published = true
    }

}

const author = { name: 'Lucas Pio' }
const tags = ['fantasy', 'action', 'adventure']

const indianaJones = new Book('IndianaJones', tags, 10 + ' reais', author)

const eldest = new Book('Eldest', tags, 20 + ' reais', author)

console.log(indianaJones)

indianaJones.addOnStock(10)
indianaJones.publish()

console.log(indianaJones)

console.log(eldest)

