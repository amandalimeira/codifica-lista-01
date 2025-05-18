let a = Number(prompt("Digite o valor do lado A: "));
let b = Number(prompt("Digite o valor do lado B: "));
let c = Number(prompt("Digite o valor do lado C: "));

if (a <= 0 || b <= 0 || c <= 0) {
    alert("Por favor, insira valores positivos para os lados.");
} else {
    if (a < b + c && b < a + c && c < a + b) {
        alert("Os lados formam um triângulo.");

        if (a === b && b === c) {
            alert("O triângulo é equilátero.");
        } else if (a === b || a === c || b === c) {
            alert("O triângulo é isósceles.");
        } else {
            alert("O triângulo é escaleno.");
        }
    } else {
        alert("Os lados não formam um triângulo.");
    }
}