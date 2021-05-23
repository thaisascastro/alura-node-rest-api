const moment = require('moment');

const conexao = require('../infraestrutura/conexao')

class Atendimento {
  adiciona(atendimento) {
    const dataCriacao = new Date()
    const atendimentoDatado = {...atendimento, dataCriacao}

// criando nossa query 
    const sql = 'INSERT INTO Atendimentos SET ?'
    // ? significa o que a gente vai adicionar na tabela

    conexao.query(sql, atendimentoDatado, (erro, resultados) => {
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