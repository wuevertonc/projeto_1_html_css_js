// criando vetor para auxiliar
let alunos = [];

// Adicionar aluno na lista
function adicionarAluno() {
    const aluno = document.getElementById("aluno").value;
    const email = document.getElementById("email").value;
    const curso = document.getElementById("curso").value;
    const periodo = document.getElementById("periodo").value;
    //forçando a conversão para float
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    // Criando uma variável para salvar a nota e fazendo cálculos
    const notaFinal = (nota1 + nota2) / 2;

    // Definindo a cor com base no resultado
    let corResultado = "";
    let resultado = "";
    if (notaFinal >= 7) {
        corResultado = "green"; // Aprovado em verde
        resultado = "Aprovado";
    } else if (notaFinal < 3) {
        corResultado = "red"; // Reprovado em vermelho
        resultado = "Reprovado";
    } else {
        corResultado = "orange"; // Recuperação em laranja
        resultado = "Recuperação";
    }

    // Criando uma linha de tabela para o aluno com a cor do resultado
    // $ cria strings dinamicas 
    const linha = document.createElement("tr");
    linha.innerHTML = `
        <td>${aluno}</td> 
        <td>${email}</td>
        <td>${curso}</td>
        <td>${periodo}</td>
        <td style="color: ${corResultado};">${notaFinal.toFixed(2)}</td> 
        <td style="color: ${corResultado};">${resultado}</td>
        <td>
            <button onclick="editarAluno(this)" class="w3-button w3-blue w3-round-large">Editar</button>
            <button onclick="excluirAluno(this)" class="w3-button w3-red w3-round-large">Excluir</button>
        </td>
    `;

    // Adicionar a linha à tabela
    const tabela = document.getElementById("listaAlunos");
    tabela.appendChild(linha);//adiciona nó como filho de outro nó na tabela

    // Acionamos a função limpar formulário após rodar o script
    limparFormulario();
}


// Função para limpar o formulário
function limparFormulario() {
    document.getElementById("aluno").value = "";
    document.getElementById("email").value = "";
    document.getElementById("curso").value = "ADS";
    document.getElementById("periodo").value = "1";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
}

// Função para editar um aluno
function editarAluno(botaoEditar) {
    const linha = botaoEditar.parentNode.parentNode;
    const celulas = linha.getElementsByTagName("td");

    document.getElementById("aluno").value = celulas[0].textContent;
    document.getElementById("email").value = celulas[1].textContent;
    document.getElementById("curso").value = celulas[2].textContent;
    document.getElementById("periodo").value = celulas[3].textContent;
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";

    // Remover a linha da tabela
    linha.parentNode.removeChild(linha);
}

// Função para excluir um aluno
function excluirAluno(botaoExcluir) {
    const linha = botaoExcluir.parentNode.parentNode;

    // Remover a linha da tabela
    linha.parentNode.removeChild(linha);
}
//funçaõ para limitar que o usuário digite um valor até 10
function limitarNota(input) {
    if (input.value > 10) {
        input.value = 10;
    }
}
