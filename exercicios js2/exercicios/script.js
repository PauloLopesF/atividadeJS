var listaDeNumeros = []

function cadastrar() {

var numerais = {
    numero1: "",
    numero2: ""
}

numerais.numero1 = document.getElementById("numero1").value
numerais.numero2 = document.getElementById("numero2").value

listaDeNumeros.push(numerais)
console.log(listaDeNumeros)

}

// function somar() {
//     var soma =  numerais.numero1 + numerais.numero2;
//     console.log(soma)
//  }

//Exercício 1
/* Criar um formulário HTML que receba 2 números e a partir deles:
a) Some A e B
b) Subtraia A de B
c) Eleve A a potência de B

//Normal: Exibir no console
//Hard: Exibir em um elemeto HTML*/

function somar(){
    let a = Number(document.getElementById("numero1").value)
    let b = Number(document.getElementById("numero2").value)
    let c = a + b
    console.log(c)
    document.getElementById("resul").innerText = c
}


function subtrair(){
    let a = Number(document.getElementById("numero1").value)
    let b = Number(document.getElementById("numero2").value)
    let c = a - b
    console.log(c)
    document.getElementById("resul").innerText = c
}

function potencia(){
    let a = Number(document.getElementById("numero1").value)
    let b = Number(document.getElementById("numero2").value)
    let c = a ** b
    console.log(c)
    document.getElementById("resul").innerText = c
}

//document.getElementById("result").innerText = c


//Exercício 2
//a) Crie um formulário que receba informações de contato de uma
 //pessoa e depois exiba no console seu nome, idade e residência
//No console
//Em um elemento HTML o [ultimo cadastrado]
//Adicionando cada cadastro em uma lista

let listaPessoas = []

function enviar() {
   
    let pessoa = {
       Nome: "",
       Idade: "",
       Telefone: "",
       CEP: "",
       Endereco: ""
    }

    pessoa.Nome = document.getElementById("InputNome").value
    pessoa.Idade = document.getElementById("InputIdade").value
    pessoa.Telefone = document.getElementById("InputTelefone").value
    pessoa.CEP = document.getElementById("InputCep").value
    pessoa.Endereco = document.getElementById("InputEndereco").value
    console.log("Nome: "+pessoa.Nome, "- Idade: "+pessoa.Idade, "- Endereço: "+pessoa.Endereco)

    let ultimo = pessoa;
    console.log(ultimo)
    document.getElementById("ultimoCadastro").innerText = pessoa.Nome /*é para exibir no elemento HTML só o nome da pessoa?*/
    
    listaPessoas.push(pessoa)
    console.log(listaPessoas)
    
}


//b) Crie um formulário que receba as informações de um Carro,
//Modelo, Ano de Lançamento, Cor e Preço. Exiba os carros cadastrados.
//No console
//Em um elemento HTML  o [ultimo cadastrado]
//Adicionando cada cadastro em uma lista

let listaDeCarros = []
function cadastroCarro() {

    let carro = {
        Modelo: "",
        AnoDeLancamento: "",
        Cor: "",
        Preco: ""
    }


carro.Modelo = document.getElementById("InputModelo").value
carro.AnoDeLancamento = document.getElementById("InputAnoDeLancamento").value
carro.Cor = document.getElementById("InputCor").value
carro.Preco = document.getElementById("InputPreco").value
console.log("Modelo: "+carro.Modelo, "- Ano de Lançamento: "+carro.AnoDeLancamento, "- Cor: "+carro.Cor, "- Preço: "+carro.Preco)

document.getElementById("ultimoCarro").innerText = carro.Modelo
listaDeCarros.push(carro)
console.log(listaDeCarros)
}
