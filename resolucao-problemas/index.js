//Comando no terminal -> node index.js
// variável, seu valor pode ser alterado no decorrer do programa
// let nomeEstudante = "Helena";
//console.log(nomeEstudante);

// constante, seu valor não pode ser alterado
//const nomeDoEstudante = "Helena";
//console.log(nomeDoEstudante);

//Em outras linguagens, portanto, você encontrará algo semelhante a:
//String: nomeEstudante = "Helena";

//let listaDeEstudantes = ["Helena", "Chico", "Mário"];
//let quantidadeDeEstudantes = listaDeEstudantes.length;
//console.log(quantidadeDeEstudantes);

//let listaDeEstudantes = ["Helena", "Chico", "Mário"];
//let quantidadeDeEstudantes = listaDeEstudantes.length;
//for (let indice = 0; indice < quantidadeDeEstudantes; indice++) {
	//const alunoCorrente = listaDeEstudantes[indice];
	//console.log(alunoCorrente);


//Com o do:
//let listaDeEstudantes = ["Helena", "Chico", "Mário"];
//let quantidadeDeEstudantes = listaDeEstudantes.length;
//let inicio = 0;

//do {
	//console.log(listaDeEstudantes[inicio]);
	//inicio++;
//} while (inicio < quantidadeDeEstudantes);

//------------------------------------------------//

//Com o while:
//while (inicio < quantidadeDeEstudantes) {
//	console.log(listaDeEstudantes[inicio]);
//	inicio++;
//}

//for (let numero = 1; numero <= 10; numero++) {
//	console.log(numero);
//}

//let listaDeEstudantes = ["Helena", "Chico", "Mário"];
//let quantidadeDeEstudantes = listaDeEstudantes.length;

//listaDeEstudantes.push("José");
//console.log(listaDeEstudantes);

//let listaDeEstudantes = ["Helena", "Chico", "Mário"];
//let quantidadeDeEstudantes = listaDeEstudantes.length;
//if (quantidadeDeEstudantes < 5) {
//	listaDeEstudantes.push("José");
//}
//console.log(listaDeEstudantes);

/*let listaDeEstudntes = ["",""];
let listaDeEstudantes = ["Helena", "Chico", "Mário", "José", "Maria"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
if (quantidadeDeEstudantes < 7) {
	listaDeEstudantes.push("João");
	console.log(listaDeEstudantes);
} else {
	console.log("Não é possível inserir mais alunos nessa turma");
}*/
//let particip = prompt("digite um valor");
//console.log(particip);

//***************************************************************
//**********Cadastro de eventos**********
let prompt = require('prompt-sync')();
let quantidade_particip = 0
let lista_particip = [];
let nome_particip
while (quantidade_particip < 4){
	console.log("Olá! Bem vindo ao cadastro de eventos!");
	let data_evento = prompt('Por favor, insira a data do evento.');
	let data = new Date();
	let dia = data.getDate();
	let mes = data.getMonth()+1;
	if (dia.toString().length == 1) dia = '0'+ dia;
	if (mes.toString().length == 1) mes = '0'+ mes;
	let data_atual = `${dia}/${mes}/${data.getFullYear()}`
	console.log(data_evento);
	console.log(data_atual);
	if (data_evento <= data_atual) {
		console.log("Data inválida! Cadastro não permitido.");
	}

	let idade = prompt('Por favor, digite sua idade.');
	console.log(idade);
	if (idade < 18){
		console.log("Evento não permitido para menores de 18 anos.");
	}
	
	console.log(lista_particip);
	nome_particip = prompt("Por favor, digite seu nome.");
	lista_particip.push(nome_particip);
	console.log(lista_particip);
	quantidade_particip = lista_particip.length;
	console.log("Obrigado! Cadastro finalizado!")
}	

console.log("Limite de vagas excedido! Não será mais possível realizar o cadastro.")