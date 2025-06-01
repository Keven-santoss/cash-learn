document.addEventListener("DOMContentLoaded", () => {
    const btnSaibaMais = document.getElementById("btnSaibaMais");
    const btnVoltar = document.getElementById("btnVoltar");

    if (btnSaibaMais) {
        btnSaibaMais.addEventListener("click", () => {
            // Adiciona o efeito de transição ao mudar de página
            document.body.style.transition = "transform 1s ease-in-out";
            document.body.style.transform = "translateY(-100vh)";

            // Redireciona após a animação
            setTimeout(() => {
                window.location.href = "/poupanca2";
            }, 1000); // Tempo de transição
        });
    }

    if (btnVoltar) {
        btnVoltar.addEventListener("click", () => {
            // Adiciona o efeito de transição para voltar à página anterior
            document.body.style.transition = "transform 1s ease-in-out";
            document.body.style.transform = "translateY(100vh)";

            // Redireciona após a animação
            setTimeout(() => {
                window.location.href = "/poupanca";
            }, 1000); // Tempo de transição
        });
    }
});

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
