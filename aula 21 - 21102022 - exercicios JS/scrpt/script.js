let listaDeClientes = []

function Cadastrar() {
   
   let cliente = {
      Nome: "",
      Idade: "",
      CPF: "",
      CEP: "",
      Endereco: ""
   }

   cliente.Nome = document.getElementById("InputNome").value
   cliente.Idade = document.getElementById("InputIdade").value
   cliente.CPF = document.getElementById("InputCPF").value
   cliente.CEP = document.getElementById("InputCEP").value
   cliente.Endereco = document.getElementById("InputEndereco").value
   listaDeClientes.push(cliente)
   console.log(listaDeClientes)

   document.getElementById("usuario").innerText = cliente.Nome

   //Exibir uma lista de usuários
   let ul = document.getElementById("ListaUsuarios");
   let li = document.createElement("li");
   li.appendChild(document.createTextNode(cliente.Nome));
   ul.appendChild(li);
}

function ExibirCadastros() {
   console.log(listaDeClientes)
}



//Exercício 1
/* Criar um formulário HTML que receba 2 números e a partir deles:
a) Some A e B
b) Subtraia A de B
c) Eleve A a potência de B

//Normal: Exibir no console
//Hard: Exibir em um elemeto HTML

//Exercício 2
a) Crie um formulário que receba informações de contato de uma
 pessoa e depois exiba no console seu nome, idade e residência
//No console
//Em um elemento HTML o [ultimo cadastrado]
//Adicionando cada cadastro em uma lista


 b) Crie um formulário que receba as informações de um Carro,
Modelo, Ano de Lançamento, Cor e Preço. Exiba os carros cadastrados.
//No console
//Em um elemento HTML  o [ultimo cadastrado]
//Adicionando cada cadastro em uma lista



*/
