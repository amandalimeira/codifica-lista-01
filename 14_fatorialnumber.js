// Solicita ao usuário que digite um número inteiro para calcular o fatorial
let numero = Number(prompt("Digite um número inteiro para calcular o fatorial:"));

// Inicializa a variável fatorial com 1 (pois 0! = 1)
let fatorial = 1;

// Usa um loop for para multiplicar os números de 1 até o número fornecido
for (let i = 1; i <= numero; i++) {
    fatorial = fatorial * i;
}

// Exibe o resultado para o usuário
alert("O fatorial de " + numero + " é: " + fatorial);