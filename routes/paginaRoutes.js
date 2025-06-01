// routes/paginaRoutes.js
const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require('../middlewares/auth');
const paginaController = require("../controllers/paginaController");

// Rotas para arquivos HTML estáticos
router.get("/", paginaController.home);
router.get("/conta", paginaController.conta);
router.get("/sobre", paginaController.sobre);
router.get("/sobre2", paginaController.sobre2);
router.get("/contato2", paginaController.contato2);
router.get("/login", paginaController.login);
router.get("/sobrenosREFERENCIA", paginaController.sobrenosREFERENCIA);
router.get("/termosPolitica", paginaController.termosPolitica);
router.get("/todosConteudos", paginaController.todosConteudos);
router.get("/tesouro", paginaController.tesouro);
router.get("/bolsa", paginaController.bolsa);
router.get("/cdb", paginaController.cdb);
router.get("/dividas", paginaController.dividas);
router.get("/poupanca", paginaController.poupanca);

// Rotas para páginas renderizadas via Handlebars
router.get("/tesouro2", ensureAuthenticated , paginaController.tesouro2);
router.get("/bolsa2", ensureAuthenticated ,paginaController.bolsa2);
router.get("/cdb2", ensureAuthenticated ,paginaController.cdb2);
router.get("/dividas2", ensureAuthenticated ,paginaController.dividas2);
router.get("/poupanca2", ensureAuthenticated ,paginaController.poupanca2);
router.get("/contato", paginaController.contato);

module.exports = router;
