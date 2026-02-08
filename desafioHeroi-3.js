class infoHero{
    constructor(nome,classe, nivel){
    this.nome=nome
     this.classe=classe
    this.nivel=nivel
   
}escrever(){
    console.log(`ola ${this.nome},seu ${this.classe} está no nivel: ${this.nivel}.`)
}
}

class ataqueHeroi{
    constructor(heroi,ataque,){
        this.heroi=heroi
        this.ataque=ataque

    }escrever (){
        console.log(`o tipo ${this.heroi.classe} atacou usando ${this.ataque}.`)
    }
}
let info = new infoHero ("Slimmshady","Ninja", 651)
let ataque = new ataqueHeroi (info, "shuriken")
info.escrever()
ataque.escrever()