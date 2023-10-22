class Adress {
    constructor(street, city, state, country) {
        this.street = street
        this.city = city
        this.state = state
        this.country = country
    }

    fullAdress () {
        return `Rua: ${this.street}, Cidade: ${this.city}, Estado: ${this.state}, País: ${this.country}`
    }
}

module.exports = Adress