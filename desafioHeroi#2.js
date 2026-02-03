let resultado = calcularVitorias(149,77)
function calcularVitorias(num1, num2){
    let calculo = num1 - num2
    return calculo
}
function rankHeroi (resultado){
    if (resultado<=10){
     return "Ferro"
       }else if(resultado<=20){
         return "Bronze"
          }else if(resultado<=50){
             return "Prata"
                 }else if(resultado<=80){
                  return "Ouro"
                    }else if(resultado<=90){
                     return "Diamante"
                      }else if(resultado<=100){
                        return "Lendário"
                          }else {
                            return "Imortal"}

    

}
console.log("O Herói tem "+resultado,"de saldo de vitórias e está no rank nível:"+rankHeroi(resultado))

