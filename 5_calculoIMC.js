let peso = Number(prompt("Digite seu peso (kg): "));
let altura = Number(prompt("Digite sua altura (m): "));

if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
    alert("Por favor, insira valores válidos para peso e altura.");
} else {
    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Baixo peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }
    // Exibe o resultado do IMC limitado a 2 casas decimais e a classificação
    alert(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`);
}
