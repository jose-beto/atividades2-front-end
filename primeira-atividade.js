/*var readline = require(`readline-sync`);

var nome = readline.question(`Nome: `);
var nota1 = readline.questionFloat(`Nota 1: `);
var nota2 = readline.questionFloat(`Nota 2: `);
var nota3 = readline.questionFloat(`Nota 3: `);

var nota = (nota1 + nota2 + nota3) / 2;

if (nota >= 7) {
  console.log(`O aluno média ${nota} esta aprovado`);
} else if (nota <= 5) {
  console.log(`O aluno média ${nota} esta reprovado`);
} else {
  nota >= 5.1 || nota <= 6.9;
  console.log(`O aluno média ${nota} esta recuperação`);
}*/

/*var readline = require(`readline-sync`)

var numero1 =  readline.question(`Numero 1:`)
var numero2 =  readline.question(`Numero 2:`)

if(numero1 > numero2){

    console.log(`O numero ${numero1} e maior que ${numero2}`)
}else if (numero1 < numero2){

    console.log(`O numero ${numero1} e menor que ${numero2}`)
}else{

    console.log(`Os numeros são iguais`) // esta correto

}*/

/*var readline = require(`readline-sync`);

var sexo1 = readline.question(`Sexo 1:`);

if (sexo1 == `M`) {
  console.log(`O sexo ${sexo1} e válido`);
} else if (sexo1 != `M`) {
  console.log(`O sexo ${sexo1} e inválido`);
}

var sexo2 = readline.question(`Sexo 2:`);

if (sexo2 == `F`) {
  console.log(`O sexo ${sexo2} e válido`);
} else if (sexo2 != `F`) {
  console.log(`O sexo ${sexo2} e inválido`); // está correto
}*/

/*var readline = require(`readline-sync`);

var nome = readline.question(`Nome do Aluno: `);
var n1 = readline.questionFloat(`Nota 1: `);
var n2 = readline.questionFloat(`Nota 2: `);
var n3 = readline.questionFloat(`Nota 3: `);
var n4 = readline.questionFloat(`Nota 4: `);

var n = (n1 + n2 + n3 + n4) / 2;

if (n >= 6) {
  console.log(`Aluno média ${n} esta aprovado`);
} else if (n <= 6) {
  console.log(`Aluno média ${n} esta reprovado`);
}*/

/*var readline = require(`readline-sync`);

var nome = readline.question(`Nome do Aluno(a): `);
var n1 = readline.questionFloat(`Nota 1: `);
var n2 = readline.questionFloat(`Nota 2: `);
var n3 = readline.questionFloat(`Nota 3: `);
var n4 = readline.questionFloat(`Nota 4: `);

var n = (n1 + n2 + n3 + n4) / 2;
var sexo1 = readline.question(`Sexo 1:`);

if (n >= 6 && sexo1 == `M`) {
  console.log(`Aluno média ${n} esta aprovado`);
} else if (n <= 6) {
  console.log(`Aluno média ${n} esta reprovado`);
}

var nome = readline.question(`Nome do Aluno(a): `);
var n1 = readline.questionFloat(`Nota 1: `);
var n2 = readline.questionFloat(`Nota 2: `);
var n3 = readline.questionFloat(`Nota 3: `);
var n4 = readline.questionFloat(`Nota 4: `);
var n = (n1 + n2 + n3 + n4) / 2;

var sexo2 = readline.question(`Sexo 2:`);
if (n >= 6 && sexo2 == `F`) {
  console.log(`Aluna média ${n} esta aprovada`);
} else if (n <= 6) {
  console.log(`Aluna média ${n} esta reprovada`);
}*/




/*var readline = require(`readline-sync`);

var p1 = (12.00 * 8) * 30
var p2 = (17.00 * 8) * 30
var p3 = (25.00 * 8) * 30

console.log(`O professor nível 1, receberá: R$ ${p1} `)
console.log(`O professor nível 2, receberá: R$ ${p2} `)
console.log(`O professor nível 3, receberá: R$ ${p3} `)*/




var readline = require(`readline-sync`)

var altura = readline.questionFloat(`Digite altura: `)
var p1 = readline.questionFloat(`Sexo:  `)
var p2 = readline.questionFloat(`Sexo:  `)

p1 = (72,7 * altura) - 58
p2 = (62,1 * altura) - 44,7

if (p1 > pesoideal) {
  console.log(`Individuo gordo  ${p1}`)
} else if (p1 < pesoideal) {
  console.log(`Individuo magro  ${p1}`)
}






