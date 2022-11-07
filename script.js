let posX = 300
let posY = 200
let velocidade = 3
var cor = 'black' ;
var cor2 = '#FFFFFF'

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


// Escrita KidCode no fundo
ctx.font = "50px Verdana";
ctx.strokeStyle = "grey"
ctx.strokeText("KidCode",200,200);


//funcionamento do pincel de desenho {
setInterval(game, 100/15)

function game(){
    
    
    /* restart = ctx.drawImage(reset, 10, 10, 30, 30) */
    /* ctx.clearRect(posX, posY, 4, 6); */

    ctx.fillStyle = `${cor}`
    ctx.fillRect(posX,posY,8,8);
    ctx.fillStyle = `${cor2}`
    ctx.fillRect(posX + 3, posY + 3, 2, 2);
}
// }


//mapeamento das teclas para mexer o pincel {

window.addEventListener('keydown', keypush);

function keypush (event){

    if(event.keyCode == 37){
        posX -= velocidade

    }else if(event.keyCode == 39){
        posX += velocidade
    }

    if(event.keyCode == 38){
        posY -= velocidade

    }else if(event.keyCode == 40){
        posY += velocidade
    }
}

// }

//Botão de reset apaga todo o desenho e começa novamente
function clearAll(){
    ctx.clearRect(0,0,600,400)
    ctx.font = "50px Verdana";
    ctx.strokeStyle = "grey"
    ctx.strokeText("KidCode",200,200);
    posX = 300
    posY = 200
}

//para fazer o botão de cor se manter selecionado{    
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", selecionar)
}    

function selecionar(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
}
// }


//muda a cor para lilais
function purple(){
    cor = '#AC52CC'
    cor2 = "#ffffff" 
}

//muda a cor para vermelho
function red(){
    cor = 'red'
    cor2 = "#ffffff"
}

//muda a cor para preto
function black(){
    cor = 'black'
    cor2 = "#ffffff"
}

//Pega o valor do input cor e manda para o pincel
function newColor(){
    var novaCor = document.getElementById("Cores").value
    cor = novaCor

    //Caso escolha a cor branca o ponto de referencia fica preto
    if (novaCor == "#ffffff"){
        cor2 = "#000000"
    }else{
        cor2 = "#ffffff"
    }
}


