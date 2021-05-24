const Atendimento = require("../models/atendimentos");

module.exports = (app) => {
  //trazer dados
  app.get("/atendimentos", (req, res) => {});

  // enviar dados
  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;

    Atendimento.adiciona(atendimento, res);
  });
};
