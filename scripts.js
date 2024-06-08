const resultado = document.querySelector('.resultado')
const scoreHumano = document.querySelector('.scoreHumano')
const scoreRobo = document.querySelector('.scoreRobo')

let somadorHumano = 0
let somadorRobo = 0

const GAME_OPTIONS = {
    PEDRA: 'pedra',
    PAPEL: 'papel',
    TESOURA: 'tesoura'
}

const jogadorHumano = (escolhaUsuario) => {
   
    comparaEscolha(escolhaUsuario,jogadorRobo())
}

const jogadorRobo = () => {
    const escolha  = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA]
    const indiceAleatorio =  Math.floor(Math.random() * 3)
    return escolha[indiceAleatorio]
}

const comparaEscolha = (humano,robo) => {
    
    if(humano === robo) {
        resultado.innerHTML = "Empate!"
    } else if (
        (humano == GAME_OPTIONS.PEDRA && robo == GAME_OPTIONS.TESOURA) || 
        (humano == GAME_OPTIONS.TESOURA && robo == GAME_OPTIONS.PAPEL) ||
        (humano == GAME_OPTIONS.PAPEL && robo == GAME_OPTIONS.PEDRA)
    ) {
        resultado.innerHTML = "Você Ganhou!"
        somadorHumano++
        scoreHumano.innerHTML = somadorHumano
    } else {
        resultado.innerHTML = "Você perdeu!"
        somadorRobo++
        scoreRobo.innerHTML = somadorRobo
    }      
}