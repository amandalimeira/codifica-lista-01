// Solicita ao usuário o primeiro valor
let valor1 = Number(prompt("Digite o primeiro valor:"));

// Solicita ao usuário o segundo valor
let valor2 = Number(prompt("Digite o segundo valor (diferente do primeiro):"));

// Verifica se os valores são diferentes
if (valor1 === valor2) {
    alert("Os valores não podem ser iguais. Tente novamente.");
} else {
    // Se valor1 for menor que valor2, mostra na ordem digitada
    if (valor1 < valor2) {
        alert("Ordem crescente: " + valor1 + ", " + valor2);
    } else {
        // Se valor2 for menor, mostra invertido
        alert("Ordem crescente: " + valor2 + ", " + valor1);
    }
}