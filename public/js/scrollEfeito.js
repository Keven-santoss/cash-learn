// Seleciona todos os links que apontam para a página de login
const loginLinks = document.querySelectorAll('a[href="/login"]');

// Verifica se há links "Faça login" na página
if (loginLinks.length > 0) {
    loginLinks.forEach(function(link) {
        // Adiciona um evento de clique a cada link "Faça login"
        link.addEventListener('click', function(event) {
            // Evita o comportamento padrão do link (redirecionamento imediato)
            event.preventDefault();

            // Aplica um efeito de rolagem suave para o topo da página
            document.body.style.transition = "transform 1s ease-in-out";
            document.body.style.transform = "translateY(-100vh)";

            // Espera a transição acabar antes de redirecionar para a nova página
            setTimeout(function() {
                window.location.href = "/login"; // URL da página de login
            }, 1000); // O tempo deve coincidir com a duração da transição
        });
    });
}
