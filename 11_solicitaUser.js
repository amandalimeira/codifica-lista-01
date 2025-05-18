// Inicializa a variável soma com zero
let soma = 0;

// Usa um loop for para repetir 5 vezes
for (let i = 1; i <= 5; i++) {
    // Solicita ao usuário um número e converte para Number
    let numero = Number(prompt("Digite o " + i + "º número:"));
    // Adiciona o número digitado à soma
    soma = soma + numero;
}

// Exibe o resultado da soma total no console
console.log("A soma total dos 5 números é: " + soma);