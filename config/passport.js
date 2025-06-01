const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const pool = require("./database");

passport.use(new LocalStrategy(
  async (email, senha, done) => {
    try {
      const results = await pool.query("SELECT * FROM usuario WHERE email = ?", [email]);
      if (results.length === 0) return done(null, false, { message: "Usuário não encontrado" });

      const usuario = results[0];
      bcrypt.compare(senha, usuario.senha, (err, senhasIguais) => {
        if (err) return done(err);
        return senhasIguais ? done(null, usuario) : done(null, false, { message: "Senha incorreta" });
      });
    } catch (erro) {
      return done(erro);
    }
  }
));

passport.serializeUser((usuario, done) => {
  done(null, usuario.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const resultados = await pool.query("SELECT * FROM usuario WHERE id = ?", [id]);
    done(null, resultados[0]);
  } catch (erro) {
    done(erro);
  }
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = {
  initializePassport: () => passport.initialize(),
  initializeSession: () => passport.session(),
  passport,
  ensureAuthenticated,    // <- esta linha é ESSENCIAL
};
