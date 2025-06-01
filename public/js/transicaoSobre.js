// Seleciona o botão
const knowMoreButton = document.querySelector('.knowmore');

// Adiciona um evento de clique ao botão
knowMoreButton.addEventListener('click', function() {
    // Aplica um efeito de transição para a nova página
    document.body.style.transition = "transform 1s ease-in-out";
    document.body.style.transform = "translateY(-100vh)";
    
    // Espera a transição acabar antes de redirecionar para a nova página
    setTimeout(function() {
        window.location.href = "/sobre2"; // Substitua com a URL da nova página
    }, 1000); // O tempo deve coincidir com a duração da transição
});

