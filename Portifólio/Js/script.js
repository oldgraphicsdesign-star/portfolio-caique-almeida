// Adiciona um evento que dispara a validação quando o formulário é enviado
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // 1. Impede o envio padrão do formulário (o que recarregaria a página)
    event.preventDefault(); 
    
    // 2. Chama a função que faz a validação obrigatória
    if (validateForm()) {
        // 3. SIMULAÇÃO DE ENVIO DE SUCESSO[cite: 60]:
        
        // Exibe a mensagem de confirmação (usando alert, conforme sugerido na atividade)
        alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
        
        // Limpa os campos do formulário (simulando que os dados foram processados)
        document.getElementById('contactForm').reset();
    }
});

function validateForm() {
    // Pega os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    // Remove mensagens de erro anteriores
    const form = document.getElementById('contactForm');
    let errorMessage = form.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
    
    let isValid = true;
    let errorText = '';

    // Validação de campos vazios (Requisito 1)
    if (nome === '' || email === '' || mensagem === '') {
        errorText = 'Todos os campos (Nome, E-mail e Mensagem) são obrigatórios.';
        isValid = false;
    } 
    
    // Validação do formato do E-mail (Requisito 2)
    else if (!validateEmailFormat(email)) {
        errorText = 'Por favor, insira um endereço de e-mail válido (ex: usuario@dominio.com).';
        isValid = false;
    }

    // Se a validação falhar, exibe a mensagem de erro no formulário
    if (!isValid) {
        errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.textContent = errorText;
        form.appendChild(errorMessage);
    }
    
    return isValid;
}

// Função para verificar o formato básico do e-mail
function validateEmailFormat(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return re.test(String(email).toLowerCase());
}
