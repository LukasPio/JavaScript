class Character {
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa) {
    this.name = nome;
    this.lifepoints = pontosDeVida;
    this.damagePoints = pontosDeAtaque;
    this.defensePoints = pontosDeDefesa;
  }

  atacar(Character) {
    const dano = this.damagePoints - Character.defensePoints;
    dano >= 0 ? (Character.lifepoints -= dano) : (Character.lifepoints -= 0);
  }
}

class Thief extends Character {
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa) {
    super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa);
  }

  atacar(Character) {
    const dano = (this.damagePoints - Character.defensePoints) * 2;
    dano >= 0 ? (Character.lifepoints -= dano) : (Character.lifepoints -= 0);
  }
}

class Mage extends Character {
  constructor(
    nome,
    pontosDeVida,
    pontosDeAtaque,
    pontosDeDefesa,
    pontosDeMagia
  ) {
    super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa);
    this.magicPoints = pontosDeMagia;
  }

  atacar(Character) {
    const dano = this.damagePoints + this.magicPoints - Character.defensePoints;
    dano >= 0 ? (Character.lifepoints -= dano) : (Character.lifepoints -= 0);
  }

  curar(Character) {
    const cura = this.magicPoints * 2;
    Character.lifepoints += cura;
  }
}

class Warrior extends Character {
  constructor(
    nome,
    pontosDeAtaque,
    pontosDeDefesa,
    pontosDeVida,
    pontosDeEscudo,
    postura
  ) {
    super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa);
    this.shieldPoints = pontosDeEscudo;
    this.posture = postura;
    if (postura == 'defesa') {
      this.defensePoints += this.shieldPoints
    }
  }

  atacar() {
    if (this.posture == "ataque") {
      const dano = this.damagePoints - Character.defensePoints;
      dano >= 0 ? (Character.lifepoints -= dano) : (Character.lifepoints -= 0);
      return null;
    }
    console.log(
      "O guerreiro não está na postura de ataque, para mudar isso, use: "
    );
  }

  changePosture() {
    if (this.posture == "ataque") {
      this.defensePoints += this.shieldPoints
      return (this.posture = "defesa");
    }
    this.defensePoints -= this.shieldPoints
    this.posture = "ataque";
  }
}

const loki = new Thief('Loki', 100, 40, 15)
const kukulcan = new Mage('Kukulcan', 80, 40, 10, 30)
const aquiles = new Warrior('Aquiles', 45, 35, 120, 10, 'ataque')

console.table({loki, kukulcan, aquiles})
loki.atacar(kukulcan)
aquiles.changePosture()
console.table({loki, kukulcan, aquiles})

const nomes = ['lucas', 'matheus', 'jorge']
