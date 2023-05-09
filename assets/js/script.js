var quantVitoriaJogador = 0
var quantVitoriaComputador = 0

function jogar( escolhaJogador ) {
    var jogadorHTML = document.querySelector('input#name')
    var resJogador = document.querySelector('#imgresJogador')
    var resComputador = document.querySelector('#imgresComputador')
    var imgresX = document.querySelector("#imgresX")
    var placar = document.querySelector('#placar')
    var nome = jogadorHTML.value
    var enderesoImgJogador = ''
    var enderesoImgComputador = ''
    var escolhaComputador = Math.floor(Math.random() * 3) + 1
 
    enderesoImgJogador = escolhaImg(escolhaJogador)
    enderesoImgComputador = escolhaImg(escolhaComputador)
    
    resJogador.src = enderesoImgJogador
    resComputador.src = enderesoImgComputador
    imgresX.src = 'assets/img/x.png'

    if( vencedor(enderesoImgJogador, enderesoImgComputador) == `jogador venceu` ) {
        quantVitoriaJogador++
        if(nome == '') {
            placar.innerHTML = `<h3>Vencedor da rodada e jogador</h3>`
        } else {
            placar.innerHTML = `<h3>Vencedor da rodada e ${nome}</h3>`
        }
    } else if(vencedor(enderesoImgJogador, enderesoImgComputador) == `computador venceu` ){
        quantVitoriaComputador++
        placar.innerHTML = `<h3>Vencedor da rodada e o computador</h3>`
    } else {
        placar.innerHTML = `<h3>empate</h3>`
    }

    if(nome == '') {
        placar.innerHTML += `<p>Jogador ${quantVitoriaJogador} x ${quantVitoriaComputador} Computador</p>`
    } else {
        placar.innerHTML += `<p>${nome} ${quantVitoriaJogador} x ${quantVitoriaComputador} Computador</p>`
    }
}

function escolhaImg( escolha ) {
    if(escolha == 1) {
        return 'assets/img/Papel.png'
    } else if(escolha == 2) {
        return 'assets/img/Pedra.png'
    } else if(escolha == 3) {
        return 'assets/img/Tesoura.png'
    }
}

function vencedor( jogador1, jogador2 ) {
    if ( jogador1 ===  jogador2 ) {
        return `empate`
    } else if ((jogador1 === 'assets/img/Papel.png' &&  jogador2 === 'assets/img/Tesoura.png') || (jogador1 === 'assets/img/Tesoura.png' &&  jogador2 === 'assets/img/Pedra.png') || (jogador1 === 'assets/img/Pedra.png' &&  jogador2 === 'assets/img/Papel.png')) {
        return 'computador venceu'
    } else if ((jogador1 === 'assets/img/Papel.png' &&  jogador2 === 'assets/img/Pedra.png') || (jogador1 === 'assets/img/Tesoura.png' &&  jogador2 === 'assets/img/Papel.png') || (jogador1 === 'assets/img/Pedra.png' &&  jogador2 === 'assets/img/Tesoura.png')) {
        return 'jogador venceu'
    }
}