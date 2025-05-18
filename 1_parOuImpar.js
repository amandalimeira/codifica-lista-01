let entrada = prompt("Digite um número inteiro:");
let numero = Number(entrada);

if (numero) {
    alert("Por favor, digite um número inteiro válido.");
} else if (numero % 2 === 0) {
    alert("O número é par.");
} else {
    alert("O número é ímpar.");
}
