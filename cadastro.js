// cadastro.js

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const dataNasc = document.getElementById("data-nascimento").value;
    const genero = document.getElementById("genero").value;
    const endereco = document.getElementById("endereco").value;
    const cep = document.getElementById("cep").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar-senha").value;

    // Validação de senha
    if (senha !== confirmar) {
        mostrarMensagem("As senhas não coincidem!", "erro");
        return;
    }

    // Recuperar lista de usuários existentes ou criar array vazio
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar se o email já está cadastrado
    const emailExiste = usuarios.some(user => user.email === email);
    if (emailExiste) {
        mostrarMensagem("Este e-mail já está cadastrado!", "erro");
        return;
    }

    // Criar objeto com dados do novo usuário
    const novoUsuario = {
        nome,
        email,
        telefone,
        dataNascimento: dataNasc,
        genero,
        endereco,
        cep,
        senha
    };

    // Adicionar novo usuário à lista
    usuarios.push(novoUsuario);

    // Salvar lista atualizada no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Exibir mensagem de sucesso
    mostrarMensagem("Cadastro concluído com sucesso!", "sucesso");
    
    // Limpar formulário
    this.reset();
    
    // Redirecionar para login após 2 segundos (opcional)
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
});

// Função para exibir mensagens
function mostrarMensagem(texto, tipo = "sucesso") {
    const container = document.getElementById("mensagem-container");
    
    // Criar elemento da mensagem
    const mensagem = document.createElement("div");
    mensagem.className = `mensagem ${tipo}`;
    mensagem.textContent = texto;
    
    // Adicionar ao container
    container.appendChild(mensagem);
    
    // Remover após 3 segundos
    setTimeout(() => {
        mensagem.style.opacity = "0";
        setTimeout(() => {
            container.removeChild(mensagem);
        }, 300);
    }, 3000);
}