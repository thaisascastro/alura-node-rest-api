const conexao = require('../infraestrutura/conexao')

class Atendimento {
  adiciona(atendimento) {
// criando nossa query 
    const sql = 'INSERT INTO Atendimentos SET ?'
    // ? significa o que a gente vai adicionar na tabela

    conexao.query(sql, atendimento, (erro, resultados) => {
      if(erro) {
        console.log(erro)
      }
      else {
        console.log(resultados)
      }
    })
  }
}

module.exports = new Atendimento