// Exercícios, Lógica de Programação, Algoritmos e JavaScript
// Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o valor da média do aluno para qualquer condição.


// Campo de variável
let nota1,nota2,nota3,nota4,notaFinal,media;

// Campo de algoritmo
alert("Veja se o aluno foi Aprovado"); //Saída de dados

nota1=parseFloat(prompt("Digite a primeira nota: ")); //Entrada e Saída de dados
nota2=parseFloat(prompt("Digite a segunda nota: ")); //Entrada e Saída de dados
nota3=parseFloat(prompt("Digite a terceira nota: ")); //Entrada e Saída de dados
nota4=parseFloat(prompt("Digite a quarta nota: ")); //Entrada e Saída de dados

media=(nota1+nota2+nota3+nota4)/4 //Processamento

//Processamento
if (media >= 5) { 
    alert("Aluno aprovado! Nota final: "+media); //Saída de dados
}else{
    alert("Aluno não aprovado! Nota final: "+media); //Saída de dados
};