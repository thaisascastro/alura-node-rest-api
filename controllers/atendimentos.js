module.exports = app => {
  //trazer dados
  app.get('/atendimento', (req, res) => res.send("Você está na rota atendimento e realizando um GET!"));

  // enviar dados
  app.post('/atendimentos', (req, res) => res.send("Você está na rota de atendimentos e realizando um POST!"))
}