// routes/conteudoRoutes.js
const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/passport");
const path = require("path");

// Exemplo para cada rota de conteúdo seguro:
router.get("/tesouro2", ensureAuthenticated, (req, res) => {
  res.render("conteudos/tesouro2");
});
router.get("/poupanca2", ensureAuthenticated, (req, res) => {
  res.render("conteudos/poupanca2");
});
router.get("/cdb2", ensureAuthenticated, (req, res) => {
  res.render("conteudos/cdb2");
});
router.get("/bolsa2", ensureAuthenticated, (req, res) => {
  res.render("conteudos/bolsa2");
});
router.get("/dividas2", ensureAuthenticated, (req, res) => {
  res.render("conteudos/dividas2");
});

// Rota “genérica”: todosConteudos (ex: GET /todosConteudos → envia HTML estático)
router.get("/todosConteudos", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/conteudos/todosConteudos.html"));
});


module.exports = router;
