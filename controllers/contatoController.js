// controllers/contatoController.js
const MensagemDAO = require("../models/mensagemDAO");
const pool = require("../config/database");
const mensagemDAO = new MensagemDAO(pool);

module.exports = {
  // GET /contato (exibe form de envio de mensagem)
  exibirFormulario: (req, res) => {
    res.render("contato", { message: "Envie sua mensagem!" });
  },

  // POST /enviarMensagem (salva no banco e redireciona)
  enviarMensagem: async (req, res) => {
    const { name, email, message } = req.body;
    const usuarioId = req.isAuthenticated() ? req.user.id : null;
    try {
      await mensagemDAO.salvarMensagem(usuarioId, email, message);
      res.redirect("/contato2");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      res.status(500).send("Erro ao processar sua mensagem.");
    }
  },

  // GET /contato2 (página de confirmação)
  exibirContato2: (req, res) => {
    res.sendFile("public/html/conteudos/contato2.html", { root: "." });
  },
};
