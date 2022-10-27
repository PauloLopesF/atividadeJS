

//Objetos
let Turma = [];
let pessoa = {
    CPF: '07252219925',
    NOME: 'Paulo',
    DATANASC: '01/05/1994',
    ENDERECO: 'Rua Alcantara, 113',
    TELEFONE: '964215688',
}
console.log(pessoa)
Turma.push(pessoa)
console.log(pessoa.NOME)

pessoa = {
    CPF: 072526501525,
    NOME: 'Ana',
    DATANASC: '01/05/1991',
    ENDERECO: 'Rua Vnesias, 113',
    TELEFONE: '96414856788',
}

Turma.push(pessoa)

console.log(pessoa)
console.log(pessoa.NOME)
console.log(Turma)

/********************************************** */

let produtos = []

let tenis = { modelo: 'Airforce1', cor: 'cinza', preco: 139.90, fabricante: 'addidas', ano_de_lancamento: 1991, parcelas_maximas: 6}

produtos.push(tenis)

tenis = { modelo: 'Jordan', cor: 'azul', preco: 239.90, fabricante: 'Nike', ano_de_lancamento: 1987, parcelas_maximas: 3}

produtos.push(tenis)

tenis = { modelo: 'Hilton', cor: 'pink', preco: 539.90, fabricante: 'Barbie', ano_de_lancamento: 2001, parcelas_maximas: 3}

produtos.push(tenis)

console.log('modelo:',produtos[0].modelo, 'fabricante:',produtos[0].fabricante,'preço: R$',produtos[0].preco)

console.log('modelo:',produtos[1].modelo, 'fabricante:',produtos[1].fabricante,'preço: R$',produtos[1].preco)

console.log('modelo:',produtos[2].modelo, 'fabricante:',produtos[2].fabricante,'preço: R$',produtos[2].preco)

// Exercício dado o seguinte array de objetos:
// [ 
    let banco_de_cadastros = []
    let cadastro = {
     nome: "Guilherme",
     idade: 28,
     endereco: "Rua Arisugawa"
    }

    banco_de_cadastros.push(cadastro)

    cadastro = {
        nome: "Gabriel",
        idade: 33,
        endereco: "Rua Alcantara"
       }

       banco_de_cadastros.push(cadastro)

       cadastro = {
        nome: "Ariel",
        idade: 26,
        endereco: "Rua Maria Zelia"
       }

       banco_de_cadastros.push(cadastro)

       cadastro = {
        nome: "Luis",
        idade: 30,
        endereco: "Rua 3"
       }

       banco_de_cadastros.push(cadastro)

       cadastro = {
        nome: "Julia",
        idade: 31,
        endereco: "Rua do susto"
       }
    
       banco_de_cadastros.push(cadastro)

       cadastro = {
        nome: "Bruno",
        idade: 34,
        endereco: "Rua Yamato"
       }

       banco_de_cadastros.push(cadastro)
// ]


//Exiba na tela:
//a) A idade de Luis
console.log("a)",banco_de_cadastros[3].nome, banco_de_cadastros[3].idade);
//b) O nome e o endereço de Julia
console.log("b)",banco_de_cadastros[4].nome, banco_de_cadastros[4].endereco);
//c) O nome de todas as pessoas
   console.log(banco_de_cadastros.length)
   console.log("c)",banco_de_cadastros[0].nome, banco_de_cadastros[1].nome, banco_de_cadastros[2].nome, banco_de_cadastros[3].nome, banco_de_cadastros[4].nome);

 //para exibir o resultado do laço na mesma linha:  
   var nomes = "";
   for (let i = 0; i < banco_de_cadastros.length; i++) {
    if (i<=3){
    nomes += banco_de_cadastros[i].nome+", ";
    }
    else{
    nomes += banco_de_cadastros[i].nome+". ";  
    }
   }
   console.log("O nome de todas as pessoas é: ", nomes)
//d) O nome e o endereço de todas as pessoas
var nomes_endereços = "";
   for (let i = 0; i < banco_de_cadastros.length; i++) {
        nomes_endereços += banco_de_cadastros[i].nome+", "+banco_de_cadastros[i].endereco+". ";
   }
   console.log("d) O nome e os endereços de todas as pessoas são: ", nomes_endereços)

//e) o nome e idade do último registro
let i = banco_de_cadastros.length - 1
console.log("o nome e idade do último registro é: "+banco_de_cadastros[i].nome,banco_de_cadastros[i].idade)

//Dado o seguinte conjunto de nomes
// ["Luis", "Felipe", "Rafael", "Daniel", "Bea", "Thami", "Ana", "Karol", "Marcos", "Sara", "Tiago"]
//a) Exiba o array em ordem alfabética
names = ["Luis", "Felipe", "Rafael", "Daniel", "Bea", "Thami", "Ana", "Karol", "Marcos", "Sara", "Tiago"]
console.log("Lista nomes em ordem alfabética: ",names.sort());
//Exiba o nome da primeira e terceira pessoa
console.log("A primeira pessoa é",names[0],"e a terceira pessoa é:", names[2]+".")
//Exiba o array em ordem decrescente 
console.log("Lista nomes em ordem decrescente é:",names.reverse())
//Exiba a quantidade de nomes
console.log(names.length)
//Acrescente o seu nome no array
names[11] = "Paulo"
console.log(names[11], "Foi adicionado a lista.")
//Mostre o array ordenado com o seu nome incluso
console.log("Lista nomes atualizada em ordem alfabética: ",names.sort());


/************************************************************************************************************************************/
//05/10/2022
// filtrar idades maior que 30

function checar(banco_de_cadastros) {
    return banco_de_cadastros.idade > 30
}

const result = banco_de_cadastros.filter(checar);
console.log("pessoas com idade maior que 30 no banco de cadastro:",result)

let products = [
{id: "001",
model: "Uno",
marca: "Fiat",
preco: 50000,
ano_de_lancamento: "2020",
cores_disponiveis: ["Branca", "Prata", "Preto" ,"Vermelho"]
},
{id: "002",
model: "Onyx",
marca: "Chevrolet",
preco: 43000,
ano_de_lancamento: "2016",
cores_disponiveis: ["Branca", "Prata", "Preto","Azul"]
},
{id: "003",
model: "Corsa",
marca: "Chevrolet",
preco: 20000,
ano_de_lancamento: "2014",
cores_disponiveis: ["Branca"]
}
]

console.log(products)

let cor = products.filter(
    function filtroCarro(carro){
        return ( carro.cores_disponiveis.includes("Prata") || carro.cores_disponiveis.includes("Vermelho") )
    }
)




// Fazer filtros:
// a) Preço maior que 30mil
let preco = products.filter(
    function filtroCarro(carro){
        return ( carro.preco > 30000 )
    }
)
// b) Marca igual a Chevrolet
let marca = products.filter(
    function filtroCarro(carro){
        return ( carro.marca = "Chevrolet" )
    }
)
// c) Se existir na cor preto
let cor2 = products.filter(
    function filtroCarro(carro){
        return ( carro.cores_disponiveis.includes("Preto"))
    }
)
// d) Mais novo do que 2017
let ano = products.filter(
    function filtroCarro(carro){
        return ( carro.ano_de_lancamento > 2017 )
    }
)

