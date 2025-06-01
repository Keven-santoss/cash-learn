const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/login", (req, res) => {
  // Indica onde está o login.html dentro de public/html
  res.sendFile(path.join(__dirname, "../public/html/login.html"));
});


module.exports = router;
