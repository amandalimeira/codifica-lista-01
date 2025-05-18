// Solicita ao usuário que digite um número para ver a tabuada
let numero = Number(prompt("Digite um número para ver a tabuada:"));

// Usa um loop for para multiplicar o número de 1 até 10
for (let i = 1; i <= 10; i++) {
    // Exibe o resultado da multiplicação no console
    console.log(numero + " x " + i + " = " + (numero * i));
}