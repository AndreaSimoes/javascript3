// Método simples: adicionando o título ao site
const titulo = document.createElement('h1'); // Criar o elemento h1
titulo.innerText = "Produto em Promoção!"; // Adicionar texto ao h1
document.body.appendChild(titulo); // Adicionar o h1 ao body

// Método complexo: criando o elemento para o produto
const produto = document.createElement('div'); // Criando um contêiner para o produto
produto.classList.add('produto'); // Adicionando uma classe para estilizar o produto

// Nome do produto
const nomeProduto = document.createElement('h2'); // Criar um título para o nome do produto
nomeProduto.innerText = "Tênis Esportivo"; // Definir o nome do produto
produto.appendChild(nomeProduto); // Adicionar o nome do produto ao contêiner do produto

// Descrição do produto
const descricaoProduto = document.createElement('p'); // Criar um parágrafo para a descrição
descricaoProduto.innerText = "Tênis esportivo confortável, ideal para corrida e treinos."; // Definir a descrição
produto.appendChild(descricaoProduto); // Adicionar a descrição ao contêiner do produto

// Preço do produto
const precoProduto = document.createElement('p'); // Criar um parágrafo para o preço
precoProduto.innerText = "R$ 199,90"; // Definir o preço do produto
produto.appendChild(precoProduto); // Adicionar o preço ao contêiner do produto

// Imagem do produto
const imagemProduto = document.createElement('img'); // Criar a tag img
imagemProduto.src = "https://via.placeholder.com/150"; // Definir a URL da imagem (imagem placeholder)
imagemProduto.alt = "Imagem do tênis esportivo"; // Definir o texto alternativo da imagem
produto.appendChild(imagemProduto); // Adicionar a imagem ao contêiner do produto

// Adicionar o produto completo ao body da página
document.body.appendChild(produto);