// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    const botaoSaberMais = document.getElementById("btn-saber-mais");

    // Adiciona efeito de clique para rolar até a seção Sobre
    botaoSaberMais.addEventListener("click", () => {
        const secaoSobre = document.getElementById("sobre");
        
        secaoSobre.scrollIntoView({ 
            behavior: "smooth" 
        });
    });
});
