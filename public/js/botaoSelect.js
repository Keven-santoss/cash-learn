document.addEventListener("DOMContentLoaded", function() {
  // Exibe a caixa com as outras categorias ao clicar no botão
  document.getElementById("showCategoriesButton").addEventListener("click", function() {
    const categoriesBox = document.getElementById("categoriesBox");
    categoriesBox.style.display = categoriesBox.style.display === "none" ? "block" : "none";
  });

  // Filtra os vídeos com base na categoria clicada
  document.querySelectorAll(".categoryItem").forEach(item => {
    item.addEventListener("click", function() {
      const categoriaId = item.getAttribute("data-categoria-id");
      
      // Carregar as aulas para a nova categoria
      fetch(`/aulas/${categoriaId}`)
        .then(response => response.json())
        .then(aulas => {
          const videosContainer = document.getElementById("videosContainer");
          videosContainer.innerHTML = ''; // Limpa os vídeos existentes

          aulas.forEach(aula => {
            const videoItem = document.createElement("div");
            videoItem.classList.add("videoItem");
            videoItem.innerHTML = `
              <h4>${aula.nome}</h4>
              <iframe src="${aula.link}" frameborder="0" allowfullscreen></iframe>
            `;
            videosContainer.appendChild(videoItem);
          });
        });
    });
  });
});
