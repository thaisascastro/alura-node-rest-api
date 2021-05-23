const moment = require('moment');

const conexao = require('../infraestrutura/conexao')

class Atendimento {
  adiciona(atendimento) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
    const atendimentoDatado = {...atendimento, dataCriacao, data}

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