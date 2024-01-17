const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    
    for (let i = 0; i < barbearia.cortes.length; i++){
        if (id === barbearia.cortes[i].id) {
            return barbearia.cortes[i]
        }       
    }

    return 'Corte não encontrado'
}

function buscaBarbaPorId(id) {

    for (let i = 0; i < barbearia.barbas.length; i++){
        if (id === barbearia.barbas[i].id) {
            return barbearia.barbas[i]
        }       
    }

    return 'Barba não encontrada'
}

function verificaStatusBarbearia() {
    if (barbearia.estaAberto){
        return 'Estamos abertos'
    }

    return 'Estamos fechados.'
}

function retornaTodosCortes() {
    let todosCortes = barbearia.cortes

    return todosCortes
}

function retornaTodasBarbas() {
    let todasBarbas = barbearia.barbas

    return todasBarbas
}


function criaPedido(nomeCliente, corteId, barbaId) {
    let corteEncontrado  = buscaCortePorId(corteId)
    let barbaEncontrada  = buscaBarbaPorId(barbaId)

    let pedido = {
        nome: nomeCliente,
        pedidoCorte: corteEncontrado.tipo,
        pedidoCortePreco: corteEncontrado.valor,
        pedidoBarba: barbaEncontrada.tipo,
        pedidoBarbaPreco: barbaEncontrada.valor,
    }

    return pedido
}

function atualizarServico(lista, id, valor, tipo) {
    
    for (let i = 0; i < lista.length; i++) {
        if (id === lista[i].id) {
            lista[i].tipo = tipo
            lista[i].valor = valor
        }
    }

    
    return lista
}

function calculaTotal(pedido) {
    const cortePreco = pedido.pedidoCortePreco
    const barbaPreco = pedido.pedidoBarbaPreco

    return cortePreco + barbaPreco
}
  
  
