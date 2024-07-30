const alunos = [
    {nome: "Tiago", notas: 10},
    {nome: "Gustavo", notas: 7},
    {nome: "Ellen", notas: 4},
    {nome: "Mayara", notas: 5},
    {nome: "jaime", notas: 6}
]

const aprovados = (alunos) => {
    return alunos.filter(alunos => alunos.notas >= 6);
}

console.log(aprovados(alunos))