const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const { engine } = require('express-handlebars');

const app = express();

// ================== Configurações ==================
require('./config/passport'); // Estratégia de login
const pool = require('./config/database');

// ================== Middlewares ==================
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Arquivos estáticos

app.use(session({
  secret: '123456',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// =========== Configuração Handlebars ============
app.engine('handlebars', engine({
  defaultLayout: false,
  helpers: {
    formatYouTubeEmbedUrl: function (url) {
      if (!url) return "";
      try {
        const urlObj = new URL(url);
        if (urlObj.hostname.includes("youtu.be")) return `https://www.youtube.com/embed/${urlObj.pathname.substring(1)}`;
        if (urlObj.hostname.includes("youtube.com")) return `https://www.youtube.com/embed/${urlObj.searchParams.get("v")}`;
      } catch (e) {
        return url;
      }
    }
  }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// ================== Rotas ==================
const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const paginaRoutes = require('./routes/paginaRoutes');
const contatoRoutes = require("./routes/contatoRoutes");
const aulaRoutes = require("./routes/aulaRoutes");

app.use("/", contatoRoutes);
app.use('/', authRoutes);
app.use('/', usuarioRoutes);
app.use('/', paginaRoutes);
app.use("/", aulaRoutes); 

// ================== Servidor ==================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
