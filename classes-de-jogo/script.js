class Heroi {
    constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }

    atacar () {
        let ataque

        if (this.tipo === "mago") {
            ataque = "magia de encantamento de fogo"
        } else if (this.tipo === "atirador") {
            ataque = "arco para atirar flexa encantada"
        } else if (this.tipo === "guerreiro") {
            ataque = "espada para ataque tri-slash"
        } else if (this.tipo === "tanque") {
            ataque = "âncora para golpe de frente"
        } else {
            ataque = "ataque desconhecido"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const heroi = new Heroi("Angela", 22, "mago")
heroi.atacar()

const heroi2 = new Heroi("Consorte", 30, "atirador")
heroi2.atacar()
