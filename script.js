let order = [];
let clickedOrder = [];
let score = 0;

//Pega o elemento do html.
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");


//Define a ordem dos níveis.
let shuffleOrder = () => {

    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }

};


//Altera a cor dos elementos.
let lightColor = (element , number) => {
    number = number * 500;
   
    setTimeout(() => {
         element.classList.add('selected');
     }, number - 250);
 
 
     setTimeout(() => {
         element.classList.remove('selected');
     }, number);
 
 };


//Checa se o jogador clicou na cor certa.
let checkOrder = () => {

    for (let i in clickedOrder){

        if (clickedOrder[i] != order[i]){
            gameOver();
            break;
        }

    }

    if (clickedOrder.length == order.length){ 
        alert(`Pontuação: ${score}\n Você acertou! Iniciando proximo nível.`);
        nextLevel();
    }
}


//Clique do usuario.
let click = (color) => {

    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },10);

    
}


//Cria elemento cor para que possam ser associados ao click.
let createColorElement = (color) => {
   
    if(color == 0){
        return green;
    } else if (color == 1){
        return red;
    } else if (color == 2){        
        return yellow;
    } else if (color == 3){
        return blue;
    }

}


//Cria novo nível.
let nextLevel = () => {
    score++;
    shuffleOrder();
}


//Game over.
let gameOver = () => {
    alert(`Pontuação: ${score}\n Você perdeu! \n Clique em OK para reiniciar o jogo.`);
    
    order = [];
    clickedOrder = [];
    playGame();
}


//Starta o game.
let playGame = () => {
    alert(`Bem vindo ao jogo da memória!\n Clique em OK para iniciar.`);
    
    score = 0;
    nextLevel();
}


//EventListeners.
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//Inicia o jogo após carregar a pagina.
setTimeout(() => {
    playGame();
}, 500);