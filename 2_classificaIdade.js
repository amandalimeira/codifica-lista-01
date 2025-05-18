let entrada = prompt("Digite sua idade para que ela seja classificada:");
let idade = Number(entrada);

if (idade < 0) {
    alert("Por favor, digite uma idade válida (número inteiro positivo).");
} else if (idade <= 12) { // Classificação: Criança Menor ou igual a 12 anos
    alert("Classificação: Criança");
} else if (idade <= 17) { // Classificação: Adolescente Menor ou igual a 17 anos
    alert("Classificação: Adolescente");
} else if (idade <= 59) { // Classificação: Adulto Menor ou igual a 59 anos
    alert("Classificação: Adulto");
} else { 
    // Classificação: Idoso Maior ou igual a 60 anos
    alert("Classificação: Idoso");
}