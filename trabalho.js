// 1. Crie uma variável chamada `nome` e atribua seu nome a ela. Exiba o nome no console.

let nome = "thalia"
console.log (nome)

// 2. Crie uma constante chamada `PI` e atribua o valor 3.14. Exiba o valor no console.

const PI = 3.14
console.log (PI)

// 3. Crie uma variável `idade`, atribua um valor e depois altere para um novo valor. Exiba ambos no console.

let idade = 15
console.log (15,  25)
idade = 25

// 4. Crie duas variáveis de string, `primeiroNome` e `sobrenome`, e exiba o nome completo concatenado.

let primeiroNome = "thalia"
let sobrenome = "da Silva Schmitz"

let nomeCompleto = primeiroNome + " " + sobrenome
console.log (nomeCompleto)
// 5. Dada a string `mensagem = "Olá, mundo!"`, exiba a mensagem em letras maiúsculas.

let texto = "Olá, mundo!"
let textoMaiusculo = texto.toUpperCase()
console.log(textoMaiusculo)

// 6. Crie um array com os nomes de três frutas e exiba o segundo elemento do array.

let frutas = ["banana", "uva", "maçã"];
console.log(frutas[1]);


// 7. Crie um array com três números e adicione um novo número no final. Exiba o array atualizado.

let número = [1, 2, 3,] 
número.push(5)
console.log(número)

// 8.Crie duas variáveis, `a` e `b`, atribua valores numéricos a elas e exiba a soma.

let a = 5
let b = 10

let soma = a + b
console.log(soma)


// 9. Calcule a média de três números armazenados em variáveis e exiba o resultado.

let numero1 = 8
let numero2 = 12 
let numero3 = 10

let media = (numero1 + numero2 + numero3) /3
console.log(media) 

// 10. Crie uma variável `contador` inicializada em 0, incremente-a três vezes e exiba seu valor final.

let contador = 0
contador++
contador++
contador++
console.log(contador)


// 11. Crie duas variáveis booleanas, `chuvendo` e `frio`, e use um operador lógico para verificar se deve levar um guarda-chuva.

let chovendo = true
let frio = false

console.log(`Está chovendo? ${chovendo}. Está frio? ${frio}.`)

// 12. Crie uma variável `idade` e use um operador lógico para verificar se a pessoa pode dirigir (idade >= 18).

let idade1 = 15
let idade2 = idade1 >= 18

console.log("Você pode dirigir.")
 console.log("Você não pode dirigir.")


// 13. Crie duas variáveis `x` e `y`, atribua valores diferentes e verifique se são iguais.

let x = 5
let y = 10

console.log("São iguais")
 console.log("São diferentes")


// 14. Crie uma variável `idade` e verifique se a pessoa é maior de idade (idade >= 18) e exiba uma mensagem correspondente.

let idade4 = 21
let idade5 = idade4 >= 18

console.log("Você é maior de idade")
 console.log("Você é menor de idade")


// 15. Crie duas strings, `senha1` e `senha2`, e verifique se elas são iguais.

let senha1 = 12345
let senha2 = 54321

console.log("As senhas são iguais")
 console.log("As senhas não são iguais")

// 16. Crie uma string e exiba o número de caracteres que ela contém.

let minhaString = "Professor maravilhoso"
console.log(`A string contém ${minhaString.length} caracteres.`)

// 18. Crie uma variável numérica e verifique se é par ou ímpar usando um operador aritmético.

let numero = 7

console.log("O número é par?" , numero % 2 === 0)

// 20. Crie duas variáveis, `nota1` e `nota2`, calcule a média e verifique se a média é maior ou igual a 7.

let nota1 = 8
let nota2 = 6
let media2 = (nota1 + nota2) / 2

console.log("A média é maior ou igual a 7. Aprovado!")
console.log("A média é menor que 7. Reprovado!")