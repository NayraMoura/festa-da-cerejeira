document.addEventListener('DOMContentLoaded', function() {
    // Galeria - Abre o modal ao clicar na imagem
    const imagensGaleria = document.querySelectorAll('.galeria img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('img-modal');
    const fecharModal = document.querySelector('.fechar');

    imagensGaleria.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    // Fecha o modal ao clicar no botão de fechar
    fecharModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Validação do formulário de contato
    const formContato = document.getElementById('form-contato');
    formContato.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Validar campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            exibirMensagem('Preencha todos os campos.', 'erro');
        } else if (!validarEmail(email)) {
            exibirMensagem('E-mail inválido.', 'erro');
        } else

        const accordions = document.querySelectorAll('.accordion');
        
        accordions.forEach(accordion => {
            accordions.addEventListener('click', () => {
                const body = accordion.querySelector(".accordion-body");
                body.classList.toggLe('active');   
            })
        })
