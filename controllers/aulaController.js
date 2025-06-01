// controllers/aulaController.js
const pool = require("../config/database");

module.exports = {
  // GET /aulasPorCategoria/:categoriaId → retorna JSON com as aulas
  listarAulasPorCategoria: async (req, res) => {
    const { categoriaId } = req.params;
    try {
      const queryAulas = `
        SELECT a.id, a.nome, a.link, a.duração, c.nome AS categoria_nome
        FROM aula_categoria ca
        JOIN aula a ON ca.aula_id = a.id
        JOIN categoria c ON ca.categoria_id = c.id
        WHERE ca.categoria_id = ?
      `;
      const aulas = await pool.query(queryAulas, [categoriaId]);
      res.json({ aulas });
    } catch (err) {
      console.error("Erro ao buscar aulas por categoria:", err);
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  },

  // GET /todasCategorias → retorna JSON com todas as categorias
  todasCategorias: async (req, res) => {
    try {
      const categorias = await pool.query("SELECT id, nome FROM categoria");
      res.json({ categorias });
    } catch (err) {
      console.error("Erro ao buscar categorias:", err);
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  },
};
