let totalDaCompra = 0;
limpar();

function adicionar() {
    // recupera valores: nome do produto, quantidade, valor - OK
    let produto = document.getElementById('produto').value;

    let nomeDoProduto = produto.split('-')[0];
    let preco = produto.split('R$')[1];

    let quantidade = document.getElementById('quantidade').value;

    // calcular subtotal - OK
    let subtotal = preco * quantidade;

    // adicionar ao carrinho - OK
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${subtotal}</span>
  </section>`

    // atualizar valor total
    totalDaCompra += subtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalDaCompra}`;

    // limpar quantidade
    document.getElementById('quantidade').value = '';
}

function limpar() {
    totalDaCompra = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}