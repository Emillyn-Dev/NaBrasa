/* Mudança de cor */
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    // NOTA: localStorage não deve ser usado em artifacts, mas mantido aqui para seu ambiente local
    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {
        console.warn('localStorage não disponível');
    }
}

// Carregar preferências salvas
window.addEventListener('DOMContentLoaded', () => {
    try {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    } catch (e) {
        console.warn('localStorage não disponível');
    }
});


// ============== DADOS DOS PRODUTOS ==============

const produtosEntradas = [
    { img: "img2/entrada/QUENTE - Camarões salteados no alho e limão siciliano.png", nome: "Camarões salteados no alho e limão siciliano.", preco: 27.00 },
    { img: "img2/entrada/QUENTE - Croquetes de cordeiro com aioli de hortelã.png", nome: "Croquetes de cordeiro com aioli de hortelã.", preco: 27.00 },
    { img: "img2/entrada/Tábua de frios e queijos artesanais com pães rústicos.png", nome: "Tábua de frios e queijos artesanais com pães rústicos.", preco: 27.00 },
    { img: "img2/entrada/Batatas rústicas com maionese de páprica e limão.png", nome: "Batatas rústicas com maionese de páprica e limão.", preco: 20.00 },
    { img: "img2/entrada/Bolinho de bacalhau com aioli de alho assado.png", nome: "Bolinho de bacalhau com aioli de alho assado.", preco: 20.00 },
    { img: "img2/entrada/FRIA - Ceviche de peixe branco com leite de tigre cítrico.png", nome: "Ceviche de peixe branco com leite de tigre cítrico.", preco: 20.00 },
    { img: "img2/entrada/FRIA - Ostras frescas com vinagrete de frutas cítricas.png", nome: "Ostras frescas com vinagrete de frutas cítricas.", preco: 25.00 },
    { img: "img2/entrada/Mini tacos de atum com guacamole.png", nome: "Mini tacos de atum com guacamole.", preco: 27.00 },
    { img: "img2/entrada/FRIA - tartar de salmão com creme de avocado e crocante de arroz.png", nome: "Tartar de salmão com creme de avocado e crocante de arroz.", preco: 18.00 }
    
    
];

const produtosPrincipais = [
    { img: "img2/principal/1.jpg", nome: "Robalo grelhado com purê de couve-flor e crocante de alho-poró", descricao: "Um prato elegante e equilibrado, que une sabor e leveza. O robalo é grelhado até atingir uma pele dourada e crocante, mantendo o interior macio e suculento. Acompanhado por um purê de couve-flor cremoso e aromático, o preparo ganha textura com o crocante de alho-poró e o toque cítrico do azeite de limão-siciliano. A farofa de castanhas finaliza a experiência com um sabor levemente adocicado e sofisticado.", preco: 45.00 },
    { img: "img2/principal/2.jpg", nome: "Polvo confitado com batatinhas ao murro e aioli defumado", descricao: "Um polvo confitado brilhante e macio é servido com batatinhas ao murro douradas, brotos frescos, um toque de óleo avermelhado e um cremoso aioli defumado, formando um prato elegante e equilibrado.", preco: 52.00 },
    { img: "img2/principal/3.jpg", nome: "Steak tartare contemporâneo com gema curada e chips de batata roxa", descricao: "Um tartar de carne moldado com precisão, coroado por uma gema brilhante e acompanhado de chips de batata roxa, brotos frescos e gotas de molho escuro, formando um prato elegante e contrastante.", preco: 48.00 },
    { img: "img2/principal/4.jpg", nome: "Entrecôte grelhado com manteiga de ervas e purê de alho assado", descricao: "Um suculento corte de carne grelhado com manteiga de ervas é servido sobre um rico molho escuro, acompanhado de purê cremoso e cebolinhas caramelizadas, formando um prato clássico e reconfortante.", preco: 48.00 },
    { img: "img2/principal/5.jpg", nome: "Filé mignon ao molho de vinho do Porto e purê de mandioquinha trufado", descricao: "Um medalhão de carne suculento servido com purê de batatas cremoso, finalizado com molho de vinho tinto e chips crocantes para dar contraste e elegância ao prato.", preco: 48.00 },
    { img: "img2/principal/6.jpg", nome: "Short rib assado lentamente com jus de carne e legumes glaceados", descricao: "Um corte de costela extremamente macio, cozido lentamente até atingir textura desmanchando, servido com cenouras e batatinhas douradas. Tudo envolto em um molho escuro encorpado, que realça o sabor profundo da carne e traz um toque rústico e sofisticado ao prato.", preco: 48.00 }
];

const produtosAcompanhamentos = [
    { img: "img2/acompanhamentos/Arroz Branco Aromatizado com Manteiga e Ervas Finas.png", nome: "Arroz Branco Aromatizado com Manteiga e Ervas Finas", preco: 15.00 },
    { img: "img2/acompanhamentos/Farofa de Castanhas e Cebola Roxa..png", nome: "Farofa de Castanhas e Cebola Roxa.", preco: 22.00 },
    { img: "img2/acompanhamentos/Legumes Grelhados com Azeite de Limão Siciliano..png", nome: "Legumes Grelhados com Azeite de Limão Siciliano.", preco: 16.00 },
    { img: "img2/acompanhamentos/Purê de Batata Trufado com Crocante de Parmesão.png", nome: "Purê de Batata Trufado com Crocante de Parmesão.", preco: 8.00 },
    { img: "img2/acompanhamentos/Purê de Mandioquinha com Queijo Grana Padano.png", nome: "Purê de Mandioquinha com Queijo Grana Padano.", preco: 14.00 },
    { img: "img2/acompanhamentos/Batatas Rústicas ao Alecrim com Sal Rosa.png", nome: "Batatas Rústicas ao Alecrim com Sal Rosa", preco: 18.00 },
];

const produtosBebidas = [
    { img: "img2/bebidas/Brisa Tropical  vodka, maracujá, manga e espuma de coco..png", nome: "Brisa Tropical  vodka, maracujá, manga e espuma de coco.", preco: 8.00 },
    { img: "img2/bebidas/Cabernet Sauvignon (Chile).png", nome: "Cabernet Sauvignon (Chile)", preco: 25.00 },
    { img: "img2/bebidas/Céu Rosa  gin rosé, xarope de hibisco, água tônica e pétalas comestíveis..png", nome: "Céu Rosa  gin rosé, xarope de hibisco, água tônica e pétalas comestíveis.", preco: 12.00 },
    { img: "img2/bebidas/Chá de Flor de Laranjeira e Mel..png", nome: "Chá de Flor de Laranjeira e Mel", preco: 12.00 },
    { img: "img2/bebidas/Chocolate Quente Cremoso com Pimenta e Chantilly..png", nome: "Chocolate Quente Cremoso", preco: 8.00 },
    { img: "img2/bebidas/Lumière Spritz espumante, licor de flor de sabugueiro, limão siciliano e um toque de lavanda..png", nome: "Lumière Spritz espumante, licor de flor de sabugueiro, limão siciliano e um toque de lavanda.", preco: 18.00 },
    { img: "img2/bebidas/Matcha Spark chá verde matcha com limão e água tônica..png", nome: "Matcha Spark chá verde matcha com limão e água tônica.", preco: 18.00 },
    { img: "img2/bebidas/Mojito Siciliano  rum, hortelã, limão siciliano e açúcar orgânico..png", nome: "Mojito Siciliano  rum, hortelã, limão siciliano e açúcar orgânico.", preco: 12.00 },
    { img: "img2/bebidas/Ouro Negro rum envelhecido, café espresso, licor de baunilha e raspas de chocolate..png", nome: "Ouro Negro rum envelhecido, café espresso, licor de baunilha e raspas de chocolate.", preco: 8.00 },
    { img: "img2/bebidas/Sauvignon Blanc (Nova Zelândia).png", nome: "Sauvignon Blanc (Nova Zelândia)", preco: 25.00 }
    
];

const produtosSobremesas = [
    { img: "img2/sobremesa/Pavlova Contemporânea com Creme de Baunilha e Coulis de Framboesa..png", nome: "Pavlova Contemporânea com Creme de Baunilha e Coulis de Framboesa.", preco: 22.00 },
    { img: "img2/sobremesa/PAISAGEM -Crème Brûlée de Baunilha com Crocante de Açúcar Mascavo e Framboesas Frescas..png", nome: "Crème Brûlée de Baunilha", preco: 18.00 },
    { img: "img2/sobremesa/PAISAGEM -Panacota de Lavanda com Mel de Flor de Laranjeira..png", nome: "PAISAGEM -Panacota de Lavanda com Mel de Flor de Laranjeira.", preco: 17.00 },
    { img: "img2/sobremesa/Brownie de Chocolate Belga com Sorvete de Pistache e Flor de Sal..png", nome: "Brownie de Chocolate Belga com Sorvete de Pistache e Flor de Sal.", preco: 15.00 },
    { img: "img2/sobremesa/PAISAGEM - Esfera de Chocolate Recheada.png", nome: "Esfera de Chocolate Recheada.", preco: 28.00 },
    { img: "img2/sobremesa/PAISAGEM - Mini bolo de laranja com creme cítrico, sorvete de baunilha e coulis de maracujá..png", nome: "Mini bolo de laranja com creme cítrico, sorvete de baunilha e coulis de maracujá.", preco: 20.00 },
    { img: "img2/sobremesa/Tiramisu Desconstruído.png", nome: "Tiramisu Desconstruído.", preco: 19.00 },
    { img: "img2/sobremesa/PAISAGEM - Pavlova Tropical.png", nome: "Pavlova Tropical", preco: 15.00 },
    { img: "img2/sobremesa/PAISAGEM - Entremet de Chocolate com Framboesa e Sorvete de Baunilha..png", nome: "Entremet de Chocolate com Framboesa", preco: 20.00 },
    { img: "img2/sobremesa/CheesecakedeFrutasVermelhas.png", nome: "CheesecakedeFrutasVermelhas.", preco: 25.00 },
    { img: "img2/sobremesa/PAISAGEM - PetitGateau.png", nome: "PetitGateau.", preco: 22.00 },
    { img: "img2/sobremesa/PAISAGEM - TiramisuTradicional.png", nome: "TiramisuTradicional.", preco: 22.00 }
    
    
    
    
];

// Copiar mesmos produtos para versões vegetarianas (você pode customizar depois)
const produtosVegetarianosEntrada = [
    { img: "img2/entrada/VEG - Carpaccio de beterraba com queijo de cabra e nozes.png", nome: "Carpaccio de beterraba com queijo de cabra e nozes.", preco: 20.00 },
    { img: "img2/entrada/VEG - Croquete de quinoa e legumes com aioli de ervas.png", nome: "Croquete de quinoa e legumes com aioli de ervas.", preco: 20.00 },
    { img: "img2/entrada/VEG - Falafel com molho tahine e limão.png", nome: "Falafel com molho tahine e limão.", preco: 20.00 },
    { img: "img2/entrada/VEG - Mini salada de figo, rúcula e gorgonzola.png", nome: "Mini salada de figo, rúcula e gorgonzola.", preco: 25.00 },
    { img: "img2/entrada/VEGETARIANA - Ceviche de manga e palmito pupunha.png", nome: "Ceviche de manga e palmito pupunha.", preco: 18.00 },
    { img: "img2/entrada/VEG - quiche de espinafre e queijo feta.jpg", nome: "Quiche de espinafre e queijo feta.", preco: 18.00 }
    ];
const produtosVegetarianosPrincipal = [          //TROCAR AS FOTOS, ADICIONAR A DESCRIÇÃO
    { img: "img2/principal/VEG - Cauliflower steak com molho romesco e purê.jpg", nome: "Cauliflower steak com molho romesco e purê.", descricao: "Steak de couve-flor selado até ficar macio e levemente crocante, servido sobre um purê cremoso e finalizado com o molho romesco de pimentões assados e amêndoas. Um prato leve, saboroso e cheio de personalidade.", preco: 45.00 },
    { img: "img2/principal/VEG - Ravioli de abóbora com manteiga de sálvia e castanha do pará .jpg", nome: "Ravioli de abóbora com manteiga de sálvia e castanha do pará", descricao: "Raviolis artesanais de abóbora servidos com molho de manteiga e sálvia, acompanhados de castanhas-do-pará tostadas. Um prato aconchegante, aromático e elegante.", preco: 52.00 },
    { img: "img2/principal/VEG-Gnocchi de beterraba com pesto de rúcula e queijo .jpg", nome: "Gnocchi de beterraba com pesto de rúcula e queijo.", descricao: "Gnocchi artesanal de beterraba, macio e colorido, combinado com um pesto fresco de rúcula que traz leve picância e aroma intenso. Finalizado com queijo para equilibrar cremosidade e sabor. Um prato vibrante, moderno e marcante.", preco: 48.00 }
    ];
const produtosVegetarianosAcomp = [   //ADICIONAR AS FOTOS NO HTML
    { img: "img2/acompanhamentos/VEG - Arroz com Amêndoas Tostadas.jpg", nome: "legumes grelhados ao azeite.", preco: 15.00 },
    { img: "img2/acompanhamentos/VEG - Salada de Quinoa com Hortelã e Limão.jpg", nome: "Salada de Quinoa com Hortelã e Limão.", preco: 18.00 },
    { img: "img2/acompanhamentos/VEG - Quinoa Mediterrânea.jpg", nome: "Quinoa Mediterrânea.", preco: 22.00 },
    { img: "img2/acompanhamentos/VEG - Brócolis ao Alho e Limão.jpg", nome: "Brócolis ao Alho e Limão.", preco: 16.00 },
    { img: "img2/acompanhamentos/VEG - Legumes Confit ao Azeite Premium.jpg", nome: "Legumes Confit ao Azeite Premium.", preco: 8.00 },
    { img: "img2/acompanhamentos/VEG - Farofa de Manteiga com Cebola Dourada.jpg", nome: "Farofa de Manteiga com Cebola Dourada.", preco: 14.00 },
    { img: "img2/acompanhamentos/VEG - Salada Verde com Vinagrete de Mostarda e Mel.jpg", nome: "Salada Verde com Vinagrete de Mostarda e Mel.", preco: 20.00 },
    { img: "img2/acompanhamentos/VEG - Couve na Chapa com Alho.jpg", nome: "Couve na Chapa com Alho.", preco: 24.00 },
    { img: "img2/acompanhamentos/VEG - Cuscuz Marroquino com Legumes e Amêndoas.jpg", nome: "Cuscuz Marroquino com Legumes e Amêndoas.", preco: 12.00 }
    ];

// ============== ÍNDICES DE CADA CARROSSEL ==============
const indices = {
    entrada: 0,
    principal: 0,
    acompanhamentos: 0,
    bebidas: 0,
    sobremesas: 0,
    entradaVeg: 0,
    principalVeg: 0,
    acompVeg: 0
};

// ============== CONFIGURAÇÕES DOS CARROSSÉIS ==============
const configCarrossel = {
    'entrada-normal': {
        indiceKey: 'entrada',
        produtos: produtosEntradas,
        seletor: '#entrada-normal',
        itensVisiveis: 3,
        passo: 3,
        tipo: 'grid'
    },
    'entrada-veg': {
        indiceKey: 'entradaVeg',
        produtos: produtosVegetarianosEntrada,
        seletor: '#entrada-veg',
        itensVisiveis: 3,
        passo: 3,
        tipo: 'grid'
    },
    'principal-normal': {
        indiceKey: 'principal',
        produtos: produtosPrincipais,
        seletor: '#principal-normal',
        itensVisiveis: 1,
        passo: 1,
        tipo: 'principal'
    },
    'principal-veg': {
        indiceKey: 'principalVeg',
        produtos: produtosVegetarianosPrincipal,
        seletor: '#principal-veg',
        itensVisiveis: 1,
        passo: 1,
        tipo: 'principal'
    },
    'acomp-normal': {
        indiceKey: 'acompanhamentos',
        produtos: produtosAcompanhamentos,
        seletor: '#acomp-normal',
        itensVisiveis: 6,
        passo: 3,
        tipo: 'grid'
    },
    'acomp-veg': {
        indiceKey: 'acompVeg',
        produtos: produtosVegetarianosAcomp,
        seletor: '#acomp-veg',
        itensVisiveis: 6,
        passo: 3,
        tipo: 'grid'
    },
    'bebidas': {
        indiceKey: 'bebidas',
        produtos: produtosBebidas,
        seletor: '#bebidas',
        itensVisiveis: 2,
        passo: 2,
        tipo: 'grid'
    },
    'sobremesas': {
        indiceKey: 'sobremesas',
        produtos: produtosSobremesas,
        seletor: '#sobremesas',
        itensVisiveis: 3,
        passo: 3,
        tipo: 'sobremesas'
    }
};

// ============== FUNÇÃO PRINCIPAL DO CARROSSEL ==============
function changeSlide(carrosselId, direcao) {
    const config = configCarrossel[carrosselId];
    if (!config) {
        console.error('Carrossel não encontrado:', carrosselId);
        return;
    }

    const container = document.querySelector(config.seletor);
    if (!container) {
        console.error('Container não encontrado:', config.seletor);
        return;
    }

    // Calcular novo índice
    const movimento = direcao * config.passo;
    indices[config.indiceKey] = (indices[config.indiceKey] + movimento + config.produtos.length) % config.produtos.length;

    // Atualizar exibição conforme o tipo
    switch (config.tipo) {
        case 'grid':
            atualizarCarrosselGrid(container, config);
            break;
        case 'principal':
            atualizarCarrosselPrincipal(container, config);
            break;
        case 'acompanhamentos':
            atualizarCarrosselAcompanhamentos(container, config);
            break;
        case 'sobremesas':
            atualizarCarrosselSobremesas(container, config);
            break;
    }
}

// ============== FUNÇÕES DE ATUALIZAÇÃO ==============

function atualizarCarrosselGrid(container, config) {
    const itens = container.querySelectorAll('.item-car, .item-car2');
    const indice = indices[config.indiceKey];

    for (let i = 0; i < config.itensVisiveis && i < itens.length; i++) {
        const produtoIdx = (indice + i) % config.produtos.length;
        const produto = config.produtos[produtoIdx];
        atualizarItem(itens[i], produto);
    }
}

function atualizarCarrosselPrincipal(container, config) {
    const indice = indices[config.indiceKey];
    const produto = config.produtos[indice % config.produtos.length];

    const textoDiv = container.querySelector('.texto');
    const imgDiv = container.querySelector('.item-car1 img');
    const descricoes = textoDiv.querySelectorAll('.descricao');

    if (descricoes[0]) descricoes[0].textContent = produto.nome + " – Servido com azeite de limão-siciliano e farofa de castanhas.";
    if (descricoes[1]) descricoes[1].textContent = produto.descricao;
    if (imgDiv) imgDiv.src = produto.img;

    const container1 = textoDiv.querySelector('.quantidade-container1');
    if (container1) {
        container1.dataset.preco = produto.preco;
        resetarQuantidadeEValor(container1, produto.preco);
    }
}

function atualizarCarrosselAcompanhamentos(container, config) {
    const todasImgCar = container.querySelectorAll('.img-car');
    const indice = indices[config.indiceKey];

    todasImgCar.forEach((imgCarDiv, divIndex) => {
        const itens = imgCarDiv.querySelectorAll('.item-car');
        itens.forEach((item, i) => {
            const posicaoGlobal = (divIndex * 3) + i;
            const produtoIdx = (indice + posicaoGlobal) % config.produtos.length;
            const produto = config.produtos[produtoIdx];
            atualizarItem(item, produto);
        });
    });
}

function atualizarCarrosselSobremesas(container, config) {
    const sobDiv = container.querySelector('.sob');
    const sob1 = sobDiv.querySelector('.sob-1');
    const sobSobs = sobDiv.querySelectorAll('.sob-sob1');
    const indice = indices[config.indiceKey];

    // Atualizar primeiro item grande
    let produto = config.produtos[indice % config.produtos.length];
    atualizarItem(sob1, produto);

    // Atualizar itens menores
    for (let i = 0; i < sobSobs.length; i++) {
        const produtoIdx = (indice + i + 1) % config.produtos.length;
        produto = config.produtos[produtoIdx];
        atualizarItem(sobSobs[i], produto);
    }
}

function atualizarItem(item, produto) {
    const img = item.querySelector('img');
    if (img) img.src = produto.img;

    const detalhe = item.querySelector('.detalhe');
    if (detalhe) detalhe.textContent = produto.nome;

    const container = item.querySelector('.quantidade-container, .quantidade-container1');
    if (container) {
        container.dataset.preco = produto.preco;
        resetarQuantidadeEValor(container, produto.preco);
    }
}

function resetarQuantidadeEValor(container, preco) {
    const input = container.querySelector('.quantidade');
    if (input) input.value = 0;

    const valor = container.querySelector('.valor');
    if (valor) valor.textContent = formatarPreco(preco);
}

// ============== QUANTIDADE ==============

function alterarQuantidade(botao, delta) {
    const container = botao.closest('.quantidade-container, .quantidade-container1');
    const input = container.querySelector('.quantidade');

    let quantidade = parseInt(input.value) + delta;
    if (quantidade < parseInt(input.min)) quantidade = parseInt(input.min);
    input.value = quantidade;

    atualizarValorExibido(container);
}

function atualizarValorExibido(container) {
    const precoUnitario = parseFloat(container.dataset.preco);
    const input = container.querySelector('.quantidade');
    const quantidade = parseInt(input.value);
    const valor = container.querySelector('.valor');

    if (!valor) return;

    if (quantidade === 0) {
        valor.textContent = formatarPreco(precoUnitario);
    } else {
        const total = precoUnitario * quantidade;
        valor.textContent = formatarPreco(total);
    }
}

function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ============== ADICIONAR AO CARRINHO ==============

// ================== VARIÁVEIS ==================
const sidebar = document.getElementById("cart-sidebar");
const overlay = document.getElementById("cart-overlay");
const cartItemsDiv = document.getElementById("cart-items");
const cartTotalSpan = document.getElementById("cart-total");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// ================== FUNÇÕES ==================
function abrirCarrinho() {
    sidebar.classList.add("open");
    overlay.classList.add("show");
}

function fecharCarrinho() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
}

function atualizarCarrinho() {
    cartItemsDiv.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco * item.quantidade;

        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <div class="info">
                    <p><strong>${item.nome}</strong></p>
                    <p>${item.quantidade} x R$ ${item.preco.toFixed(2)}</p>
                </div>
                <button class="remove" onclick="removerItem(${index})">✖</button>
            </div>
        `;
    });

    cartTotalSpan.textContent = total.toFixed(2);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function removerItem(i) {
    carrinho.splice(i, 1);
    atualizarCarrinho();
}

function adicionarItem(botao) {
    const container = botao.closest(".acoes").querySelector(".quantidade-container, .quantidade-container1");
    const qtd = parseInt(container.querySelector(".quantidade").value);
    const preco = parseFloat(container.dataset.preco);

    let nomeEl = botao.closest(".item-car, .sob-sob1, .sob-1, .item-car1, .item-car2, .prin, .texto")
                     .querySelector(".detalhe, .descricao");
    let nome = nomeEl ? nomeEl.innerText : "Item";

    if (qtd <= 0) return alert("Escolha uma quantidade!");

    // Verifica se o item já existe no carrinho
    const existente = carrinho.find(i => i.nome === nome && i.preco === preco);
    if (existente) {
        existente.quantidade += qtd;
    } else {
        carrinho.push({ nome, quantidade: qtd, preco });
    }

    atualizarCarrinho();
    abrirCarrinho();
}

// ================== EVENTOS ==================
document.getElementById("btn-carrinho").addEventListener("click", abrirCarrinho);
document.getElementById("close-cart").addEventListener("click", fecharCarrinho);
overlay.addEventListener("click", fecharCarrinho);

// Conecta todos os botões de adicionar ao carrinho
document.querySelectorAll(".carrinho, .carrinho1").forEach(btn => {
    btn.addEventListener("click", function() {
        adicionarItem(this);
    });
});

// Atualiza o carrinho quando a página carrega
document.addEventListener("DOMContentLoaded", atualizarCarrinho);






// Funções específicas mantidas para compatibilidade
function adicionarCarrinho1(botao) { adicionarCarrinho(botao, 'item'); }
function adicionarCarrinho2(botao) { adicionarCarrinho(botao, 'texto'); }
function adicionarCarrinho3(botao) { adicionarCarrinho(botao, 'item'); }
function adicionarCarrinho4(botao) { adicionarCarrinho(botao, 'sob1'); }
function adicionarCarrinho5(botao) { adicionarCarrinho(botao, 'sobsob'); }

// ============== MOSTRAR/OCULTAR SEÇÕES VEGETARIANAS ==============

document.addEventListener("DOMContentLoaded", function() {
    // Entrada vegetariana
    const botaoVegEntrada = document.getElementById("mostrarvegetarianas");
    const secaoVegEntrada = document.getElementById("secaovegetarianas");
    
    if (botaoVegEntrada && secaoVegEntrada) {
        botaoVegEntrada.addEventListener("click", function() {
            if (secaoVegEntrada.style.display === "none" || secaoVegEntrada.style.display === "") {
                secaoVegEntrada.style.display = "block";
                botaoVegEntrada.textContent = "Ocultar opções vegetarianas";
            } else {
                secaoVegEntrada.style.display = "none";
                botaoVegEntrada.textContent = "Ver opções vegetarianas";
            }
        });
    }

    // Principal vegetariano
    const botaoVegPrincipal = document.getElementById("mostrarvegetarianas-p");
    const secaoVegPrincipal = document.getElementById("secaovegetarianas-p");
    
    if (botaoVegPrincipal && secaoVegPrincipal) {
        botaoVegPrincipal.addEventListener("click", function() {
            if (secaoVegPrincipal.style.display === "none" || secaoVegPrincipal.style.display === "") {
                secaoVegPrincipal.style.display = "block";
                botaoVegPrincipal.textContent = "Ocultar opções vegetarianas";
            } else {
                secaoVegPrincipal.style.display = "none";
                botaoVegPrincipal.textContent = "Ver opções vegetarianas";
            }
        });
    }

    // Acompanhamentos vegetarianos
    const botaoVegAcomp = document.getElementById("mostrarvegetarianas-a");
    const secaoVegAcomp = document.getElementById("secaovegetarianas-a");
    
    if (botaoVegAcomp && secaoVegAcomp) {
        botaoVegAcomp.addEventListener("click", function() {
            if (secaoVegAcomp.style.display === "none" || secaoVegAcomp.style.display === "") {
                secaoVegAcomp.style.display = "block";
                botaoVegAcomp.textContent = "Ocultar opções vegetarianas";
            } else {
                secaoVegAcomp.style.display = "none";
                botaoVegAcomp.textContent = "Ver opções vegetarianas";
            }
        });
    }
});




// Função para mostrar mensagens temporárias
function mostrarMensagem(texto, tipo = "sucesso", duracao = 3000) {
    const container = document.getElementById("mensagem-container");

    const msg = document.createElement("div");
    msg.classList.add("mensagem");

    if (tipo === "erro") {
        msg.style.backgroundColor = "#f44336"; 
    } else {
        msg.style.backgroundColor = "#4CAF50"; // verde
    }

    msg.textContent = texto;
    container.appendChild(msg);

    // animação de entrada
    setTimeout(() => msg.classList.add("show"), 10);

    // remove depois de duracao
    setTimeout(() => {
        msg.classList.remove("show");
        setTimeout(() => container.removeChild(msg), 300);
    }, duracao);
}

// Exemplo no botão finalizar
document.getElementById("finalizar").addEventListener("click", () => {
    if(carrinho.length === 0){
        mostrarMensagem("Carrinho vazio!", "erro");
        return;
    }

    mostrarMensagem("Pedido finalizado com sucesso!");
    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
});

