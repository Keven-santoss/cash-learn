// Seleciona todos os links ou botões "Voltar"
const backButton = document.querySelector('.VOLTAR');

// Verifica se o botão "Voltar" existe
if (backButton) {
    // Adiciona um evento de clique ao botão "Voltar"
    backButton.addEventListener('click', function(event) {
        // Evita o comportamento padrão do link (redirecionamento imediato)
        event.preventDefault();

        // Aplica um efeito de rolagem suave para cima (subir a página)
        document.body.style.transition = "transform 1s ease-in-out";
        document.body.style.transform = "translateY(100vh)";

        // Espera a transição acabar antes de redirecionar para a página anterior
        setTimeout(function() {
            window.location.href = "../Code/Sobre.html"; // URL da página de destino
        }, 1000); // O tempo deve coincidir com a duração da transição
    });
}

if (btnVoltar2) {
    btnVoltar2.addEventListener("click", () => {
        // Adiciona o efeito de transição para voltar à página anterior
        document.body.style.transition = "transform 1s ease-in-out";
        document.body.style.transform = "translateY(100vh)";

        // Redireciona após a animação
        setTimeout(() => {
            window.location.href = "/";
        }, 1000); // Tempo de transição
    });
}

if (btnVoltar2) {
    btnVoltar2.addEventListener("click", () => {
        // Adiciona o efeito de transição para voltar à página anterior
        document.body.style.transition = "transform 1s ease-in-out";
        document.body.style.transform = "translateY(100vh)";

        // Redireciona após a animação
        setTimeout(() => {
            window.location.href = "/";
        }, 1000); // Tempo de transição
    });
}