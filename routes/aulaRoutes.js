// routes/aulaRoutes.js
const express = require("express");
const router = express.Router();
const aulaController = require("../controllers/aulaController");

// Retorna todas as categorias (GET /todasCategorias)
router.get("/todasCategorias", aulaController.todasCategorias);

// Retorna aulas por categoria (GET /aulasPorCategoria/:categoriaId)
router.get("/aulasPorCategoria/:categoriaId", aulaController.listarAulasPorCategoria);

module.exports = router;
