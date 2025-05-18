// Inicializa os dois primeiros números da sequência de Fibonacci
let a = 0;
let b = 1;

// Exibe os dois primeiros números no console
console.log(a);
console.log(b);

// Usa um loop for para gerar e exibir os próximos 8 números (totalizando 10)
for (let i = 3; i <= 10; i++) {
    let proximo = a + b; // Calcula o próximo número da sequência
    console.log(proximo); // Exibe o próximo número
    a = b; // Atualiza o valor de 'a'
    b = proximo; // Atualiza o valor de 'b'
}