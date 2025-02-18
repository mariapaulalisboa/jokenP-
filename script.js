
// Define o nome do jogador na Tela.
let userName = prompt('Qual é o seu Nome?');

mensagem('Bem-vindo ' + userName + ' está preparado? Escolha uma opção acima...');
definirNomeUser(userName);

function definirNomeUser(nome) {
    document.getElementById('user-name').innerHTML = nome;
}

// Exibe mensagem no console 
function mensagem(texto) {
    document.getElementById('mensagem').innerHTML = texto;
}

// Escolhe a jogada 
let userEscolha = 0;
let computadorEscolha = 0;

function jogar(escolha) {
    // Remove a classe 'opaco' de todas as escolhas do usuário e do computador
    resetarEscolhas();

    // Define a escolha do usuário
    userEscolha = escolha;
    // Remove a opacidade da escolha selecionada do usuário
    document.getElementById('user-escolha-' + escolha).classList.remove('opaco');

    // Escolher a jogada do Computador
    computadorEscolha = sortear(1, 3);
    // Remove a opacidade da escolha selecionada do computador
    document.getElementById('computador-escolha-' + computadorEscolha).classList.remove('opaco');

    // Calcular e exibir o ganhador
    let ganhador = calcularEscolha(userEscolha, computadorEscolha);
    if (ganhador == 0) {
        mensagem('Empate');
    }
    else if (ganhador == 1){
        mensagem('Ponto para ' + userName);
        somarPontosUser();
    }
    else if (ganhador == 2){
        mensagem('Ponto para Computador');
        somarPontosComputador();
    }
}

// Função para desmarcar todas as escolhas
function resetarEscolhas() {
    document.getElementById('user-escolha-1').classList.add('opaco');
    document.getElementById('user-escolha-2').classList.add('opaco');
    document.getElementById('user-escolha-3').classList.add('opaco');
    document.getElementById('computador-escolha-1').classList.add('opaco');
    document.getElementById('computador-escolha-2').classList.add('opaco');
    document.getElementById('computador-escolha-3').classList.add('opaco');
}

// Inicializa o jogo desmarcando todas as escolhas
resetarEscolhas();

document.getElementById('user-escolha-1').onclick = function(){jogar(1)};
document.getElementById('user-escolha-2').onclick = function(){jogar(2)};
document.getElementById('user-escolha-3').onclick = function(){jogar(3)};

// Sortear entre dois números
function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ajustar o Placar
let userPlacar = 0;
let computadorPlacar = 0;

// Somar Ponto para o User
function somarPontosUser () {
    userPlacar++;
    document.getElementById('user-placar').innerHTML = userPlacar;
}

// Somar Ponto para o Computador
function somarPontosComputador () {
    computadorPlacar++;
    document.getElementById('computador-placar').innerHTML = computadorPlacar;
}

// Calcular e Retornar quem Ganhou
// 0 - Empate
// 1 - Jogador
// 2 - Computador
// 1 - Pedra 
// 2 - Papel
// 3 - Tesoura
function calcularEscolha(user, computador) {
    if (user == 1 && computador == 1)
        return 0;
    else if (user == 1 && computador == 2) {
        return 2;
    }
    else if (user == 1 && computador == 3) {
        return 1;
    }
    else if(user == 2 && computador == 1){
        return 1;
    }
    else if(user == 2 && computador == 2){
        return 0;
    }
    else if(user == 2 && computador == 3){
        return 2;
    }
    else if (user == 3 && computador == 1){
        return 2;
    }
    else if (user == 3 && computador == 2){
        return 1;
    }
    else if (user == 3 && computador == 3){
        return 0;
    }
}