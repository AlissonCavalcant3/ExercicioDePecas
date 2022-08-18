let pesoPeca = 170;
let numeroPecas =  7;
let nomePeca = "Roda";

// peso das peças
if (pesoPeca > 100) {
    console.log("pode cadastrar a peça")
} else{
    console.log("cadastrar produto maior que 100g")
}

// numeros de peças 
if (numeroPecas >= 10 ) {
    console.log( "impossivel cadastrar, numero de pecas exedido")
} else {
    console.log("podemos seguir com o cadastro")
}

// nome da peça
if (nomePeca.length <= 3  ){
    console.log("infome um nome correto, esse nome nao existe")
} else {
    console.log("nome correto")
}