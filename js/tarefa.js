
//1.Crie uma função que recebe um número e verifica se ele é par ou ímpar. 

function parOuImpar(num) {
    if (num % 2 == 0) {
        console.log("O número é par");
    } else {
        console.log("O número é ímpar");
    }
}

parOuImpar(4);
parOuImpar(6);

//2.Crie uma arrow function que receba um número e verifique se é primo.

var verificaPrimo = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log("O número não é primo");
            return;
        }
    }
    console.log("O número é primo");
}

verificaPrimo(6);

//3.Crie uma função que imprime de 10 até 1 e depois imprime na tela “feliz ano novo” através de uma callback

function imprimeMsg() {
    console.log('Feliz ano novo')
}

function imprimeNumeros(imprime) {
    for (let i = 10; i > 0; i--) {
        console.log(i)
    }
    imprime();
}

imprimeNumeros(imprimeMsg);

//4.Faça o mesmo utilizando Promise com concatenação de then

var promise = new Promise(function (resolve, reject) {
    for (let i = 10; i > 0; i--) {
        console.log(i)
    }
    resolve();
});

promise.then(imprimeMsg);

//5.Agora repita a função utilizando o método async/await

async function imprimeNumeros2() {
    for (let i = 10; i > 0; i--) {
        console.log(i)
    }
}

async function imprimeMsg2() {
    await imprimeNumeros2();
    console.log('Feliz ano novo');
}
imprimeMsg2();

//6.Crie um array com as seguintes notas [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0], 
//construa uma função para imprimir apenas as notas acima de 7

let array = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];

array.filter(function (numero) {
    if (numero >= 7) {
        console.log(numero)
    }
});

//7.Crie um array de objetos onde cada objeto será um produto de supermercado e terá o nome do produto
// e o seu respectivo preço, agora construa uma função que some todos os valores e te devolva o total.

let produto1 = {
    nome: 'Arroz',
    preco: 3,
}

let produto2 = {
    nome: 'Feijão',
    preco: 4,
}

let produto3 = {
    nome: 'Leite',
    preco: 2,
}

let array7 = [produto1, produto2, produto3]

function somaValores(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i].preco;
    }
    return soma;
}

console.log(somaValores(array7));

// //8.Em uma escola ficou definido que os alunos do 8º ano terão aulas de história e os alunos do
//  9º terão aulas de física às quartas-feiras. Você deve criar uma função que receba um array de objetos 
//  contendo nome e série de cada aluno e atribua a sua respectiva disciplina da quarta-feira. 
//  (O array de alunos deve ser criado como você desejar contanto que contenha pelo menos 5 alunos).

function verificaDisciplina(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].serie == 8) {
            array[i].disciplina = 'História';
        } else if (array[i].serie == 9) {
            array[i].disciplina = 'Física';
        }
    }
}

let aluno1 = {
    nome: 'João',
    serie: 8,
    disciplina: null,
}

let aluno2 = {
    nome: 'Maria',
    serie: 8,
    disciplina: null,
}

let aluno3 = {
    nome: 'Henrique',
    serie: 9,
    disciplina: null,
}

let aluno4 = {
    nome: 'Carla',
    serie: 9,
    disciplina: null,
}

let aluno5 = {
    nome: 'Eliane',
    serie: 8,
    disciplina: null,
}

let array8 = [aluno1, aluno2, aluno3, aluno4, aluno5];

verificaDisciplina(array8);
console.log(array8);