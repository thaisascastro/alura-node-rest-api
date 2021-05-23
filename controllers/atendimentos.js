const Atendimento = require('../models/atendimentos')

module.exports = app => {

  //trazer dados
  app.get('/atendimentos', (req, res) => res.send("Você está na rota atendimento e realizando um GET!"));

  // enviar dados
  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body

    Atendimento.adiciona(atendimento, res)

  })
}