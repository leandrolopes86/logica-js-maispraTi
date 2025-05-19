 const prompt = require('prompt-sync')(); 

function ImparPar() { 

  let numero = Number(prompt("Digite um número inteiro: "));

  if (numero % 2 === 0) {
    console.log("O número é par.");
  } else {
    console.log("O número é ímpar.");
  }
  pausar();
}

function CalculaIdade() {
  let idade = Number(prompt("Digite a sua idade: "));

  if (idade <= 12) {
   console.log("Criança");
 } else if (idade <= 17) {
   console.log("Adolescente");
 } else if (idade <= 59) {
   console.log("Adulto");
 } else {
   console.log("Idoso");
 }
 pausar();
}

function ClassificaNota() {
  let nota = Number(prompt("Digite sua nota (0 a 10): "));

  if (nota >= 7) {
   console.log("Aprovado");
 } else if (nota >= 5) {
   console.log("Recuperação");
 } else {
   console.log("Reprovado");
 }
 pausar();
}

function Menu(){
  let opcao = '';

  while (opcao !== '0') {
    console.log(`
=== MENU INTERATIVO ===
1 - Dizer Olá
2 - Somar dois números
3 - Verificar se número é par ou ímpar
0 - Sair
    `);

    opcao = prompt('Escolha uma opção: ');

    switch (opcao) {
      case '1':
        const nome = prompt('Digite seu nome: ');
        console.log(`Olá, ${nome}!`);
        break;

      case '2':
        const num1 = Number(prompt('Digite o primeiro número: '));
        const num2 = Number(prompt('Digite o segundo número: '));
        console.log(`A soma de ${num1} + ${num2} = ${num1 + num2}`);
        break;

      case '3':
        const numero = Number(prompt('Digite um número: '));
        if (isNaN(numero)) {
          console.log('Entrada inválida.');
        } else {
          const tipo = numero % 2 === 0 ? 'Par' : 'Ímpar';
          console.log(`O número ${numero} é ${tipo}.`);
        }
        break;

      case '0':
        console.log('Saindo do programa...');
        break;

      default:
        console.log('Opção inválida! Tente novamente.');
    }

    console.log(); 
  }
  pausar();
}

function calcularIMC() {
  console.log("=== Cálculo de IMC ===");

  const peso = parseFloat(prompt("Digite seu peso em kg: "));
  const altura = parseFloat(prompt("Digite sua altura em metros: "));

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Peso ou altura inválidos.");
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = "Baixo peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  console.log(`Seu IMC é: ${imc.toFixed(2)} - ${classificacao}`);
  pausar();
}

function VerificarTipoTriangulo() {
  console.log("=== Verificador de Triângulo ===");

  const A = Number(prompt("Digite o valor do lado A: "));
  const B = Number(prompt("Digite o valor do lado B: "));
  const C = Number(prompt("Digite o valor do lado C: "));

  if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0) {
    console.log("Valores inválidos. Digite apenas números positivos.");
    return;
  }

  if (A + B > C && A + C > B && B + C > A) {
    let tipo = "";

    if (A === B && B === C) {
      tipo = "Equilátero";
    } else if (A === B || A === C || B === C) {
      tipo = "Isósceles";
    } else {
      tipo = "Escaleno";
    }

    console.log(`Os lados formam um triângulo ${tipo}.`);
  } else {
    console.log("Os lados fornecidos **não** formam um triângulo.");
  }
  pausar();
}

function calcularCompraMacas() {
  console.log("=== Compra de Maçãs ===");

  const quantidade = parseInt(prompt("Digite o número de maçãs compradas: "));

  if (isNaN(quantidade) || quantidade <= 0) {
    console.log("Quantidade inválida. Digite um número positivo.");
    return;
  }

  const precoUnitario = quantidade >= 12 ? 0.25 : 0.30;
  const total = quantidade * precoUnitario;

  console.log(`Você comprou ${quantidade} maçã(s) a R$ ${precoUnitario.toFixed(2)} cada.`);
  console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
  pausar();
}

function ordenarDoisValoresCrescente() {
  console.log("=== Ordenar Dois Valores ===");

  const valor1 = Number(prompt("Digite o primeiro valor: "));
  const valor2 = Number(prompt("Digite o segundo valor: "));

  if (isNaN(valor1) || isNaN(valor2)) {
    console.log("Entrada inválida. Digite apenas números.");
    return;
  }

  if (valor1 === valor2) {
    console.log("Os valores são iguais. Digite dois valores diferentes.");
    return;
  }

  if (valor1 < valor2) {
    console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`);
  } else {
    console.log(`Valores em ordem crescente: ${valor2}, ${valor1}`);
  }
  pausar();
}

function contagemRegressiva() {
  console.log("=== Contagem Regressiva de 10 até 1 ===");

  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }

  console.log("FIM!");
  pausar();
}

function repetirNumero() {
  console.log("=== Repetir Número 10 Vezes ===");

  const numero = Number(prompt("Digite um número inteiro: "));

  if (!Number.isInteger(numero)) {
    console.log("Por favor, digite um número inteiro válido.");
    return;
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${i}: ${numero}`);
  }
  pausar();
}

function somarCincoNumeros() {
  console.log("=== Soma de 5 Números ===");

  let soma = 0;

  for (let i = 1; i <= 5; i++) {
    const numero = Number(prompt(`Digite o ${i}º número: `));

    if (isNaN(numero)) {
      console.log("Valor inválido. Digite apenas números.");
      i--; // repete a mesma iteração
      continue;
    }

    soma += numero;
  }

  console.log(`A soma total dos 5 números é: ${soma}`);
  pausar();
}

function Tabuada() {
  console.log("=== Tabuada de um Número ===");

  const numero = Number(prompt("Digite um número para ver a tabuada: "));

  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
    return;
  }

  console.log(`\nTabuada de ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
  pausar();
}

function CalcularMedia() {
  console.log("=== Média Aritmética de Números Decimais ===");
  
  let soma = 0;
  let quantidade = 0;
  
  while (true) {
    const entrada = prompt("Digite um número decimal (0 para sair): ");
    const numero = parseFloat(entrada);
    
    if (isNaN(numero)) {
      console.log("Entrada inválida. Digite um número decimal válido.");
      continue;
    }
    
    if (numero === 0) break;
    
    soma += numero;
    quantidade++;
  }
  
  if (quantidade === 0) {
    console.log("Nenhum número válido foi digitado.");
  } else {
    const media = soma / quantidade;
    console.log(`A média dos ${quantidade} números digitados é: ${media.toFixed(2)}`);
  }
  pausar();
}

function CalcularFatorial() {
  console.log("=== Cálculo do Fatorial ===");

  const numero = Number(prompt("Digite um número inteiro não negativo: "));

  if (!Number.isInteger(numero) || numero < 0) {
    console.log("Por favor, digite um número inteiro não negativo.");
    return;
  }

  let fatorial = 1;

  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  console.log(`O fatorial de ${numero} é ${fatorial}.`);
  pausar();
}

function sequenciaFibonacci() {
  console.log("=== Sequência de Fibonacci (10 primeiros números) ===");

  let fibonacci = [0, 1];

  for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  console.log(fibonacci.join(', '));
  pausar();
}

function executarTarefa(opcao) {
  switch (opcao) {
    case "1":
      ImparPar();
      break;
    case "2":
      CalculaIdade();
      break;
    case "3":
      ClassificaNota();
      break;
    case "4":
      Menu();
      break;
    case "5":
      calcularIMC();
      break;
    case "6":
      VerificarTipoTriangulo();
      break;
    case "7":
      calcularCompraMacas();
      break;
    case "8":
      ordenarDoisValoresCrescente();
      break;
    case "9":
      contagemRegressiva();
      break;
    case "10":
      repetirNumero();
      break;
    case "11":
      somarCincoNumeros();
      break;
    case "12":
      Tabuada();
      break;
    case "13":
      CalcularMedia();
      break;
    case "14":
      CalcularFatorial();
      break;
    case "15":
      sequenciaFibonacci();
      break;
    default:
      alert("Opção inválida");
  }
}

function pausar() {
  prompt('Pressione qualquer tecla para retornar ao menu...');
}

function MenuInicial(){

  let opcao = "";

  do {
    console.log(`
=== MENU PRINCIPAL ===
1 - Verificar se número é Par ou Ímpar
2 - Classificar idade
3 - Classificar nota
4 - Menu interativo simples
5 - Calcular IMC
6 - Verificar tipo de triângulo
7 - Calcular compra de maçãs
8 - Ordenar dois valores em ordem crescente
9 - Contagem regressiva de 10 até 1
10 - Repetir número 10 vezes
11 - Somar 5 números
12 - Tabuada de um número
13 - Calcular média de números decimais até digitar 0
14 - Calcular fatorial
15 - Sequência de Fibonacci (10 primeiros números)
0 - Sair
    `);

    opcao = prompt("Escolha uma opção: ");
    executarTarefa(opcao);
    console.log(); 

  } while (opcao !== "0")
}

MenuInicial();