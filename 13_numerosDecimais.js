// Inicializa as variáveis para soma e contagem de números
let soma = 0;
let contador = 0;

// Solicita números decimais ao usuário até que ele digite 0
let numero = Number(prompt("Digite um número decimal (ou 0 para sair):"));

while (numero !== 0) {
    // Adiciona o número à soma
    soma = soma + numero;
    // Incrementa o contador de números digitados
    contador = contador + 1;
    // Solicita o próximo número
    numero = Number(prompt("Digite outro número decimal (ou 0 para sair):"));
}

// Verifica se algum número foi digitado para evitar divisão por zero
if (contador > 0) {
    // Calcula a média aritmética
    let media = soma / contador;
    // Exibe a média para o usuário
    alert("A média aritmética dos números digitados é: " + media);
} else {
    // Caso nenhum número tenha sido digitado
    alert("Nenhum número foi digitado.");
}