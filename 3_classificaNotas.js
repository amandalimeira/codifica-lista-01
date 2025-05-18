let entrada = prompt("Digite sua nota:");
let nota = Number(entrada);

if (nota < 0 || nota > 10) { 
    alert("Por favor, digite uma nota válida (entre 0 e 10).");
} else if (nota < 5.0) { 
    alert("Nota: " + nota + ". Você foi reprovado(a)!");
} else if (nota < 7) {  
    alert("Nota: " + nota + ". Você está em recuperação!");
} else { // 
    alert("Nota: " + nota + ". Você está APROVADO(A)!");
}