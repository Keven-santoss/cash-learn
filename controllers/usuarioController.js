// controllers/usuarioController.js
const bcrypt = require("bcryptjs");
const pool = require("../config/database");

module.exports = {
  // GET /login (renderiza a página de login)
  exibirLoginPage: (req, res) => {
    res.sendFile("public/html/login.html", { root: "." });
  },

  // POST /login (passport autentica; redireciona se sucesso/erro)
  // → Não precisa implementar aqui, pois a rota já chama passport.authenticate diretamente.

  // GET /logout
  fazerLogout: (req, res) => {
    req.logout(() => {
      res.redirect("/");
    });
  },

  // POST /conta (criação de usuário)
  criarConta: async (req, res, next) => {
    const { nome, email, senha, categorias } = req.body;
    const hashedSenha = await bcrypt.hash(senha, 8);

    try {
      // Verifica se o e-mail já existe
      const resultado = await pool.query("SELECT * FROM usuario WHERE email = ?", [email]);
      if (resultado.length > 0) {
        return res.redirect("/conta?mensagem=Email já está cadastrado.");
      }

      // Insere usuário
      const resultadoUsuario = await pool.query(
        "INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)",
        [nome, email, hashedSenha]
      );
      const usuarioId = resultadoUsuario.insertId;

      // Associa categoria(s)
      const queryCategoria = "INSERT INTO participa (usuario_id, categoria_id) VALUES (?, ?)";
      for (const categoriaId of categorias) {
        await pool.query(queryCategoria, [usuarioId, categoriaId]);
      }

      // Loga o usuário após criar conta
      const [usuario] = await pool.query("SELECT * FROM usuario WHERE id = ?", [usuarioId]);
      req.login(usuario, (err) => {
        if (err) return next(err);
        return res.redirect("/posLogin");
      });
    } catch (err) {
      console.error("Erro ao salvar os dados:", err);
      res.status(500).send("Erro interno do servidor");
    }
  },

  // GET /posLogin (página após login com aulas e categorias)
  posLogin: async (req, res) => {
    const usuarioId = req.user.id;
    try {
      const queryCategorias = `
        SELECT c.id, c.nome
        FROM participa p
        JOIN categoria c ON p.categoria_id = c.id
        WHERE p.usuario_id = ?
      `;
      const categorias = await pool.query(queryCategorias, [usuarioId]);
      if (categorias.length === 0) {
        return res.send("Nenhuma categoria encontrada para este usuário.");
      }

      const categoriasIds = categorias.map((c) => c.id);
      const queryAulas = `
        SELECT a.id, a.nome, a.link, a.duração, c.nome AS categoria_nome
        FROM aula_categoria ca
        JOIN aula a ON ca.aula_id = a.id
        JOIN categoria c ON ca.categoria_id = c.id
        WHERE ca.categoria_id IN (?)
      `;
      const aulas = await pool.query(queryAulas, [categoriasIds]);

      const [usuario] = await pool.query("SELECT nome, email FROM usuario WHERE id = ?", [usuarioId]);

      res.render("conteudos/posLogin", {
        layout: false,
        aulas,
        categorias,
        usuario: usuario.nome,
        email: usuario.email,
      });
    } catch (err) {
      console.error("Erro ao buscar as aulas:", err);
      res.status(500).send("Erro interno do servidor");
    }
  },
};
