// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: "Ana", nota: 7 },
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 8 },
    { nome: "Carlos", nota: 4 },
    { nome: "Beatriz", nota: 6 },
    { nome: "Pedro", nota: 9 },
];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAprovados(listaDeAlunos) {
    return listaDeAlunos.filter(aluno => aluno.nota >= 6);
}

// Chamando a função
const aprovados = filtrarAprovados(alunos);

// Exibindo os resultados
console.log(aprovados);
