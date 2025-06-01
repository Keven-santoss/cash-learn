// Seleciona todas as imagens com links dentro da tabela
const tableLinks = document.querySelectorAll('.tabelaso a');

// Adiciona um evento de clique a cada link
tableLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o redirecionamento imediato

        // Adiciona a classe de animação ao corpo do documento
        document.body.classList.add('slide-left');

        // Espera o tempo da animação antes de redirecionar
        setTimeout(() => {
            window.location.href = this.href; // Redireciona para o link clicado
        }, 700); // 700ms deve coincidir com o tempo da transição definida no CSS
    });
});
