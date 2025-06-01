// routes/usuarioRoutes.js
const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const usuarioController = require("../controllers/usuarioController");
const { ensureAuthenticated } = require("../config/passport");

// GET /conta  → formulário de registro
router.get("/conta", (req, res) => {
  res.sendFile("html/conta.html", { root: path.join(__dirname, "../public") });
});

// POST /conta → criar usuário
router.post("/conta", usuarioController.criarConta);

// GET /login → exibir formulário de login
router.get("/login", usuarioController.exibirLoginPage);

// POST /login → autenticação
router.post(
  "/login",
  (req, res, next) => {
    if (req.session.redirectTo) {
      return passport.authenticate("local", {
        successRedirect: req.session.redirectTo,
        failureRedirect: "/login?mensagem=Usuário ou senha inválidos",
      })(req, res, next);
    } else {
      return passport.authenticate("local", {
        successRedirect: "/posLogin",
        failureRedirect: "/login?mensagem=Usuário ou senha inválidos",
      })(req, res, next);
    }
  }
);

// GET /logout → deslogar
router.get("/logout", usuarioController.fazerLogout);

// GET /posLogin → página protegida (usa ensureAuthenticated)
router.get("/posLogin", ensureAuthenticated, usuarioController.posLogin);

module.exports = router;
