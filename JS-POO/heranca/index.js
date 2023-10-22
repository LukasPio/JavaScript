class Property {
    constructor(area, value) {
        this.area = area
        this.value = value
    }

    getPricePerSquareMeter() {
    return this.value / this.area
    }
}

class House extends Property {

}

const land = new Property(200, 50000)
const house = new House(200, 42000)

console.log(land, '\n\n\n', house)

class Apartament extends Property {

    constructor(number, area, value) {
        super(area, value)
        this.number = number
    }

    getFloor() {
        return this.number.slice(0, -2)
    }
}
 
const oneApartament = new Apartament(502, 80, 200000) 

console.log(oneApartament.getPricePerSquareMeter())