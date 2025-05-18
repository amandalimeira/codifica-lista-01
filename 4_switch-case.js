console.log("=== MENU ===");
console.log("1. Exibir mensagem de boas-vindas");
console.log("2. Classificar nota");
console.log("3. Sair");

let opcao = prompt("Escolha uma opção (1-3):");

switch (opcao) {
    case "1":
        alert("Bem-vindo(a) ao sistema de classificação de notas!");
        break;
    case "2":
        let entrada = prompt("Digite sua nota:");
        let nota = Number(entrada);

        if (nota < 0 || nota > 10) { 
            alert("Por favor, digite uma nota válida (entre 0 e 10).");
        } else if (nota < 5.0) { 
            alert("Nota: " + nota + ". Você foi reprovado(a)!");
        } else if (nota < 7) { 
            alert("Nota: " + nota + ". Você está em recuperação!");
        } else { 
            alert("Nota: " + nota + ". Você está APROVADO(A)!");
        }
        break;
    case "3":
        alert("Saindo do programa. Até logo!");
        break;
    default:
        alert("Opção inválida. Tente novamente.");
}