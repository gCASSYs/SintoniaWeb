// Script para controlar a expansão dos cards da equipe
document.addEventListener('DOMContentLoaded', function() {
    const botoesPerfil = document.querySelectorAll('.botao-perfil');
    const overlay = document.querySelector('.overlay-equipe');

    botoesPerfil.forEach(botao => {
        botao.addEventListener('click', function() {
            const card = this.closest('.card-equipe');

            if (card.classList.contains('expandido')) {
                // Fechar o card
                card.classList.remove('expandido');
                overlay.classList.remove('ativo');
                this.textContent = 'Veja +';
            } else {
                // Fechar qualquer card aberto
                document.querySelectorAll('.card-equipe.expandido').forEach(c => {
                    c.classList.remove('expandido');
                    c.querySelector('.botao-perfil').textContent = 'Veja +';
                });

                // Abrir o card atual
                card.classList.add('expandido');
                overlay.classList.add('ativo');
                this.textContent = 'Veja -';
            }
        });
    });

    // Fechar ao clicar no overlay
    overlay.addEventListener('click', function() {
        document.querySelectorAll('.card-equipe.expandido').forEach(card => {
            card.classList.remove('expandido');
            card.querySelector('.botao-perfil').textContent = 'Veja +';
        });
        overlay.classList.remove('ativo');
    });
});