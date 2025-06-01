// config/express.js
const express = require("express");
const session = require("express-session");
const path = require("path");
const { engine } = require("express-handlebars");

module.exports = (app) => {
  // Habilita JSON e URL-encoded
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Sessão
  app.use(
    session({
      secret: "123456",
      resave: false,
      saveUninitialized: false,
    })
  );

  // View Engine (Handlebars com helper personalizado)
  app.engine(
    "handlebars",
    engine({
      defaultLayout: false,
      helpers: {
        formatYouTubeEmbedUrl: function (url) {
          if (!url) return "";
          let videoId = null;
          try {
            const urlObj = new URL(url);
            if (urlObj.hostname.includes("youtu.be")) {
              videoId = urlObj.pathname.substring(1);
            } else if (urlObj.hostname.includes("youtube.com")) {
              videoId = urlObj.searchParams.get("v");
            }
          } catch (error) {
            console.error("Erro ao processar URL do YouTube:", url);
            return url;
          }
          return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
        },
      },
    })
  );
  app.set("view engine", "handlebars");
  app.set("views", path.join(__dirname, "../templates"));

  // Arquivos estáticos (CSS, JS, imagens)
  app.use(express.static(path.join(__dirname, "../templates")));
};
