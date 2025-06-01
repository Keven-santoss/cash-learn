// routes/contatoRoutes.js
const express = require("express");
const router = express.Router();
const contatoController = require("../controllers/contatoController");
const { ensureAuthenticated } = require("../config/passport");

// Formulário de contato (GET /contato)
router.get("/contato", contatoController.exibirFormulario);

// Envios de mensagem (POST /enviarMensagem)
router.post("/enviarMensagem", contatoController.enviarMensagem);

// Página de confirmação (GET /contato2)
router.get("/contato2", contatoController.exibirContato2);

module.exports = router;
