// controllers/paginaController.js
const path = require("path");

module.exports = {
  // HTML estáticos (public/html/*.html)
  home: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  },

  conta: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/conta.html"));
  },

  sobre: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/sobre.html"));
  },

  sobre2: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/conteudos/sobre2.html"));
  },

  contato2: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/conteudos/contato2.html"));
  },

  login: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  },

  sobrenosREFERENCIA: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/conteudos/sobrenosREFERENCIA.html"));
  },

  termosPolitica: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/conteudos/termosPolitica.html"));
  },

  todosConteudos: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/conteudos/todosConteudos.html"));
  },

  tesouro: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/conteudos/tesouro.html"));
  },

  bolsa: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/conteudos/bolsa.html"));
  },

  cdb: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/conteudos/cdb.html"));
  },

  dividas: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/conteudos/dividas.html"));
  },

  poupanca: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/conteudos/poupanca.html"));
  },

  // Handlebars dinâmicos (views/*.handlebars)
  tesouro2: (req, res) => {
    res.render("conteudos/tesouro2"); // views/tesouro2.handlebars
  },

  bolsa2: (req, res) => {
    res.render("conteudos/bolsa2");   // views/bolsa2.handlebars
  },

  cdb2: (req, res) => {
    res.render("conteudos/cdb2");     // views/cdb2.handlebars
  },

  dividas2: (req, res) => {
    res.render("conteudos/dividas2"); // views/dividas2.handlebars
  },

  poupanca2: (req, res) => {
    res.render("conteudos/poupanca2"); // views/poupanca2.handlebars
  },

  contato: (req, res) => {
    res.render("conteudos/contato"); // views/contato.handlebars
  },
};
