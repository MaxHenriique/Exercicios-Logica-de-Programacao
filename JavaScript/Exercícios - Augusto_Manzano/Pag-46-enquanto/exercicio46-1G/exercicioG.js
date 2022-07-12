// Exercícios, Lógica de Programação, Algoritmos e JavaScript
// Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc. 


// Campo de variável
let contadora,atual,anterior,proximo;

// Campo de algoritmo
alert("Série de Fibonacci até o décimo quinto"); //Saída de dados

anterior=0
atual=1
contadora=0

//Processamento
while (contadora <= 15) {
    contadora++
    console.log(anterior);
    proximo=atual+anterior
    anterior=atual
    atual=proximo
};