// Solicita ao usuário a quantidade de maçãs compradas
let quantidade = Number(prompt("Quantas maçãs você deseja comprar?"));

// Verifica o preço unitário de acordo com a quantidade
let preco;
if (quantidade < 12) {
    preco = 0.30; // Menos de uma dúzia: R$ 0,30 cada
} else {
    preco = 0.25; // Uma dúzia ou mais: R$ 0,25 cada
}

// Calcula o valor total da compra
let total = quantidade * preco;

// Exibe o valor total para o usuário
alert("O valor total da compra é: R$ " + total.toFixed(2));