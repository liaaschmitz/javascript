// 1. Crie uma função que receba um número e retorne a soma de todos os números de 1 até o número informado usando um laço while

// Exemplo de chamada:
// console.log(somaAteNumero(5));  // 15 (1+2+3+4+5)

// 2. Crie uma função que receba um array de números e retorne a soma de todos os números maiores que 10 usando um laço for.
function somaMaiorQueDez(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            soma += array[i]
        }

    }
    return soma
}
const numeros = [5, 12, 7, 24, 9, 10]
console.log(somaMaiorQueDez(numeros))

// 2. Crie uma função que receba um array de números e retorne a soma de todos os números maiores que 10 usando um laço `for`.

function somaMaioresQueDez(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10) {
            soma += numeros[i]
        }
    }
    return soma;
}

// Exemplo de chamada:
// console.log(somaMaiorQueDez([5, 15, 3, 20, 7]));  // 35 (15 + 20)


// 3. Crie uma função que, dado um array de filmes, retorne o nome do primeiro filme cujo título tem mais de 5 letras usando o for...of.

function primeiroFilmeComMaisDeCincoLetras(filmes) {
    for (let filme of filmes) {
        if (filme.titulo.length > 5) {
            return filme.titulo
        }
    }
    return null
}

const filmes = [
    { titulo: "Avatar", ano: 2009 },
    { titulo: "Vingadores", ano: 2012 },
    { titulo: "Up", ano: 2009 },
    { titulo: "O Rei Leão", ano: 1994 }
];

console.log(primeiroFilmeComMaisDeCincoLetras(filmes))

// Exemplo de chamada:
// console.log(filmeMaiorQueCincoLetras(["O Rei Leão", "Naruto", "Avengers", "Star Wars"]));  // "Avengers"

// 4. Crie uma função que receba um array de nomes de personagens de Hunter x Hunter com os personagens "Gon Freecss", "Killua Zoldyck", "Leorio Paradinight" e um array de números representando a força de cada personagem, respectivamente 180, 195, 140. A função deve retornar um terceiro array com o nome dos personagens cuja força seja superior a 150, utilizando um laço for.

function personagensFortes(nomes, forcas) {
    let personagensFortes = []

    for (let i = 0; i < nomes.length; i++) {
        if (forcas[i] > 150) {
            personagensFortes.push(nomes[i])
        }
    }

    return personagensFortes;
}
const nomes = ["Homem aranha", "homem de ferro", "Batman"]
const forcas = [180, 195, 140]
const personagensComForcaSuperior150 = personagensFortes(nomes, forcas)
console.log(personagensComForcaSuperior150)

// 5. Crie uma função que receba um array de números e retorne a quantidade de números negativos presentes no array, usando um laço `while`.

function contarNumerosNegativos(arr) {
    let count = 0
    let i = 0

    while (i < arr.length) {
        if (arr[i] < 0) {
            count++
        }
        i++;
    }

    return count
}
const numeros2 = [3, -2, -5, 7, 0, -1]
console.log(contarNumerosNegativos(numeros2))

// Exemplo de chamada:
// console.log(contarNegativos([3, -2, -5, 7, 0, -1]));  // 3

// 6. Crie uma função que receba uma string, converta-a para um array e retorne a quantidade de vezes que a letra "a" aparece nela.

function contarLetrasA(str) {
    const arrayDeCaracteres = str.split('');
    let contador = 0
    for (let i = 0; i < arrayDeCaracteres.length; i++) {
        if (arrayDeCaracteres[i].toLowerCase() === 'a') {
            contador++
        }
        return contador
    }
}

// Exemplo de chamada:
// console.log(contarLetraA("Naruto é um anime top!"));  // 4

// 7. Crie uma função que percorra um array de filmes e retorne um novo array com os filmes que têm o nome começando com a letra "S" usando o laço `for...of`.

function filmesComS(filmes) {
    let filmesComS = []
    for (let filme of filmes) {
        if (filme[0].toUpperCase() === 'S') {  
            filmesComS.push(filme);
        }
    }
    
    return filmesComS
}
const filmes4 = ["Star Wars", "Spider-Man", "Shrek", "Superman"]
const filmesComSResult = filmesComS(filmes4)
console.log(filmesComSResult)

// Exemplo de chamada:
// console.log(filmesComLetraS(["Star Wars", "Superman", "Shrek", "Batman"]));  // ["Star Wars", "Superman", "Shrek"]

// 8. Crie uma função que receba um array de strings e retorne a maior substring (palavra) encontrada no array.

function maiorSubstring(arr) {
    let maiorPalavra = '';
    for (let palavra of arr) {
        if (palavra.length > maiorPalavra.length) {
            maiorPalavra = palavra
        }
    }

    return maiorPalavra
}
const palavras = ["amarelo", "azul", "laranja", "rosa"]
const resultado = maiorSubstring(palavras)
console.log(resultado)

// Exemplo de chamada:
// console.log(maiorSubstring(["João", "Maria", "Alexandre", "Carlos"]));  // "Alexandre"

// 9. Crie uma função que calcule o fatorial de um número utilizando um laço `for`.

function fatorial (num1){
    let resultado = 1 
    for(let i = 1;i< num1; i++){
        resultado*=i
    }
    return resultado
}
console.log(fatorial(7))

// Exemplo de chamada:
// console.log(fatorial(5));  // 120 (5 * 4 * 3 * 2 * 1)

// 10. Crie uma função que receba um número e retorne uma string que contém esse número repetido, separado por vírgulas, utilizando um laço `while`.

function repetirNumero(num, vezes) {
    let resultado = ''
    let i = 0

    while (i < vezes) {
        if (i === vezes - 1) {
            resultado = resultado + num; 
        } else {
            resultado += num + ','
        }
        i++;  
    }

    return resultado
}
console.log(repetirNumero(3, 1))

// Exemplo de chamada:
// console.log(repetirNumero(7, 4));  // "7, 7, 7, 7"