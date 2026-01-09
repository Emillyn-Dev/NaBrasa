
/* Mudança de cor*/
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }

        // Carregar preferências salvas
        window.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            const savedFontSize = localStorage.getItem('fontSize');
            
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
            }
        });

       const data = {
            traditional: [
                {
                    img: "img/BifeAnchoPremium.jpeg",
                    name: "Bife Ancho Premium",
                    description: "Corte nobre argentino grelhado ao ponto, servido com manteiga de ervas e acompanhamentos especiais. Uma explosão de sabor que derrete na boca.",
                    ingredients: ["Bife Ancho 400g", "Manteiga de ervas artesanal", "Batatas rústicas assadas", "Legumes grelhados", "Molho chimichurri"]
                },
                {
                    img: "img/FiledeSalmaoGrelhado (1).jpg",
                    name: "Salmão Grelhado",
                    description: "Filé de salmão fresco grelhado na perfeição, acompanhado de risoto de limão siciliano e aspargos frescos. Leve e sofisticado.",
                    ingredients: ["Filé de salmão 300g", "Risoto de limão siciliano", "Aspargos verdes", "Molho de alcaparras", "Ervas frescas"]
                },
                {
                    img: "img/ComboNabrasa.jpeg",
                    name: "Combo Na Brasa",
                    description: "Uma seleção especial de carnes grelhadas no ponto perfeito, acompanhadas de molhos e guarnições irresistíveis.Sabor e tradição em cada pedaço!",
                    ingredients: ["Frango grelhado", "Linguiça artesanal", "Picanha e alcatra", "Batatas douradas", "Berinjela assada"]
                }
            ],
            vegetarian: [
                {
                    img: "img/BowlColorido.jpeg",
                    name: "Bowl Colorido",
                    description: "Uma combinação vibrante de quinoa, vegetais frescos, grão-de-bico crocante e molho tahine. Nutritivo, delicioso e visualmente deslumbrante.",
                    ingredients: ["Quinoa tricolor", "Grão-de-bico tostado", "Abacate fresco", "Tomate cereja", "Molho tahine caseiro"]
                },
                {
                    img: "img/LasanhaVegana.jpg",
                    name: "Lasanha Vegana",
                    description: "Camadas de massa fresca intercaladas com molho bolonhesa vegetal, brócolis fresco e queijo vegano gratinado. Impossível distinguir do original.",
                    ingredients: ["Massa fresca", "Proteína de soja texturizada", "Brócolis fresco", "Queijo vegano", "Manjericão fresco"]
                },
                {
                    img: "img/CurryTailandes.jpeg",
                    name: "Curry Tailandês",
                    description: "Aromático curry verde com legumes frescos, leite de coco e arroz jasmim. Uma viagem sensorial à Tailândia.",
                    ingredients: ["Pasta de curry verde", "Leite de coco", "Berinjela tailandesa", "Tofu orgânico", "Arroz jasmim"]
                }
            ],
            drinks: [
                {
                    img: "img/MojitoTropical.jpeg",
                    name: "Mojito Tropical",
                    description: "Clássico cubano reinventado com frutas tropicais frescas, hortelã orgânica e rum premium. Refrescante e sofisticado.",
                    ingredients: ["Rum branco premium", "Hortelã fresca", "Limão siciliano", "Frutas tropicais", "Açúcar orgânico"]
                },
                {
                    img: "img/CaipirinhaPremium.jpeg",
                    name: "Caipirinha Premium",
                    description: "Nossa versão especial da bebida mais brasileira de todas, feita com cachaça artesanal e frutas frescas da estação.",
                    ingredients: ["Cachaça artesanal", "Limão tahiti", "Açúcar demerara", "Gelo triturado", "Frutas da estação"]
                },
                {
                    img: "img/EspressoMartini.jpeg",
                    name: "Espresso Martini",
                    description: "Coquetel sofisticado que une café espresso fresco, vodka premium e licor de café. Perfeito para finalizar a refeição.",
                    ingredients: ["Vodka premium", "Café espresso", "Licor de café", "Xarope simples", "Grãos de café"]
                }
            ],
            desserts: [
                {
                    img: "img/CheesecakedeFrutasVermelhas.jpg",
                    name: "Cheesecake de Frutas Vermelhas",
                    description: "Cremoso cheesecake artesanal com base crocante e cobertura de frutas vermelhas frescas. O equilíbrio perfeito entre doce e ácido.",
                    ingredients: ["Cream cheese premium", "Biscoito de chocolate", "Morangos frescos", "Framboesas", "Calda de frutas vermelhas"]
                },
                {
                    img: "img/PetitGateu.png",
                    name: "Petit Gâteau",
                    description: "Bolinho de chocolate com interior cremoso e quente, acompanhado de sorvete de baunilha artesanal e calda de chocolate belga.",
                    ingredients: ["Chocolate belga 70%", "Manteiga francesa", "Ovos frescos", "Sorvete de baunilha", "Calda de chocolate"]
                },
                {
                    img: "img/TiramisuTradicional.jpeg",
                    name: "Tiramisù Tradicional",
                    description: "Clássico italiano com camadas de biscoito champagne embebido em café, creme mascarpone e cacau. Autêntico e inesquecível.",
                    ingredients: ["Mascarpone italiano", "Biscoito champagne", "Café espresso", "Marsala", "Cacau em pó"]
                }
            ]
        };

        let currentIndex = {
            traditional: 0,
            vegetarian: 0,
            drinks: 0,
            desserts: 0
        };

        function initCarousel(category) {
            const dotsContainer = document.getElementById(`${category}-dots`);
            dotsContainer.innerHTML = '';
            
            data[category].forEach((_, index) => {
                const dot = document.createElement('span');
                dot.className = 'dot' + (index === 0 ? ' active' : '');
                dot.onclick = () => goToSlide(category, index);
                dotsContainer.appendChild(dot);
            });
        }

        function updateContent(category) {
            const index = currentIndex[category];
            const item = data[category][index];
            
            document.getElementById(`${category}-img`).src = item.img;
            
            const content = document.getElementById(`${category}-content`);
            content.style.animation = 'none';
            setTimeout(() => {
                content.style.animation = 'fadeIn 0.5s ease';
            }, 10);
            
            content.innerHTML = `
                <h3 class="dish-name">${item.name}</h3>
                <p class="dish-description">${item.description}</p>
                <div class="dish-ingredients">
                    <h3>Ingredientes:</h3>
                    <ul>
                        ${item.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                    </ul>
                </div>
            `;
            
            const dots = document.querySelectorAll(`#${category}-dots .dot`);
            dots.forEach((dot, i) => {
                dot.className = 'dot' + (i === index ? ' active' : '');
            });
        }

        function changeSlide(category, direction) {
            currentIndex[category] += direction;
            if (currentIndex[category] < 0) {
                currentIndex[category] = data[category].length - 1;
            } else if (currentIndex[category] >= data[category].length) {
                currentIndex[category] = 0;
            }
            updateContent(category);
        }

        function goToSlide(category, index) {
            currentIndex[category] = index;
            updateContent(category);
        }

        // Inicializar carrosséis
        ['traditional', 'vegetarian', 'drinks', 'desserts'].forEach(category => {
            initCarousel(category);
        });



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





// Função para mostrar mensagens temporárias
function mostrarMensagem(texto, tipo = "sucesso", duracao = 3000) {
    const container = document.getElementById("mensagem-container");

    const msg = document.createElement("div");
    msg.classList.add("mensagem");

    if (tipo === "erro") {
        msg.style.backgroundColor = "#f44336"; // vermelho
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

