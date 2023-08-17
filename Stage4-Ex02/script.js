const alunos = [{
  nome: "gui",
  p1: 8,
  p2: 6,
},
{
  nome: "jones",
  p1: 6,
  p2: 6
},
{
  nome: "dexter",
  p1: 7,
  p2: 7
}
]


function calculaMediaDoAluno(alunos) {
  for (let aluno of alunos) {
      let media = 0
      
      const p1 = aluno.p1
      const p2 = aluno.p2
      media += (p1 + p2) / 2
      aluno.media = media
      aluno.foiAprovado = media >= 7 ? true : false
      if (aluno.foiAprovado) alert(`O aluno ${aluno.nome} ficou com média final de: ${media} e foi aprovado!`)
      else alert(`O aluno ${aluno.nome} ficou com média final de: ${media} e foi reprovado!`)
  }
}

calculaMediaDoAluno(alunos)


