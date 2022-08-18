let dataAtual = newDate(2022,8,18)
let dataEvento = newDate(2022,9,10);
let listaParticipante = ["Amanda","Bruna","Caio","David","Evandro"];
let idadeParticipante = 19
let quantidadeParticipante =0

if (dataEvento>dataAtual) {
    console.log("Proseguir com cadastro")
} else {
    console.log("Data Invalida para cadastro")
   
}

console.log("////////////////////////////////////////")

if (idadeParticipante >= 18) {
    console.log("Proseguir com cadastro")
} else {
    console.log("Idade Invalida para cadastro")
    
}

console.log("////////////////////////////////////////")

console.log(listaParticipante)

console.log("////////////////////////////////////////")
quantidadeParticipante = listaParticipante.length

if (quantidadeParticipante < 100) {
    console.log("Cadastro efetuado com sucesso")
} else {
    console.log("Numero de Participantes excedido")
}
