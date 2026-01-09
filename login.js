// login.js

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Recuperar lista de usuários do localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuarios.length === 0) {
        mostrarMensagem("Nenhum usuário cadastrado. Por favor, cadastre-se primeiro!", "erro");
        return;
    }

    // Buscar usuário na lista
    const usuarioEncontrado = usuarios.find(user => 
        user.nome === nome && 
        user.email === email && 
        user.senha === senha
    );

    if (usuarioEncontrado) {
        // Login bem-sucedido
        mostrarMensagem(`Bem-vindo de volta, ${usuarioEncontrado.nome}!`, "sucesso");
        
        // Salvar usuário logado
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
        
        // Limpar formulário
        this.reset();
        
        // Redirecionar para home após 2 segundos
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    } else {
        // Credenciais incorretas
        mostrarMensagem("Nome, e-mail ou senha incorretos!", "erro");
    }
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