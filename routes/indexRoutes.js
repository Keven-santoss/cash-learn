// routes/indexRoutes.js
const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/passport");
const paginaController = require("../controllers/paginaController");

// Página inicial
router.get("/", paginaController.home);

// Páginas de conteúdo estático
router.get("/sobre", paginaController.sobre);
router.get("/sobre2", paginaController.sobre2);
router.get("/termosPolitica", paginaController.termosPolitica);

// Rotas genéricas só para servir HTML/Handlebars (se não houver lógica, pode mapear direto aqui)
// Mas se tiver lógica, chame controller específico.

module.exports = router;
