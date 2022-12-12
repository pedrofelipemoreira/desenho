let posX = 300;
let posY = 200;
let velocidade = 3;
var cor = 'black' ;
var cor2 = '#FFFFFF';
let cores;
let bbb;
var tamanho = 8;

var fundo = new Image();
fundo.src = 'kidscode.png';

var carro = new Image();
carro.src = 'carro.png';

var casa = new Image();
casa.src = 'casa.png';

//Salvar imagem
saveImg = document.querySelector(".save")


var c = document.getElementById("myCanvas")
var ctx = c.getContext("2d");


//Bacground branco do tamnho do canvas, para o print sair certinho
const setCanvasBacground = () =>{
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, c.width, c.height);
}


setCanvasBacground ();

ctx.drawImage(fundo,0,0,600,400);

// Escrita KidCode no fundo
/* ctx.font = "50px Verdana";
ctx.strokeStyle = "grey"
ctx.strokeText("KidCode",200,200); */


//funcionamento do pincel de desenho {
setInterval(game, 100/15)

function game(){
    
    
    /* restart = ctx.drawImage(reset, 10, 10, 30, 30) */
    /* ctx.clearRect(posX, posY, 4, 6); */

    ctx.fillStyle = `${cor}`
    ctx.fillRect(posX,posY,tamanho,tamanho);
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
    setCanvasBacground ()
    ctx.drawImage(fundo,0,0,600,400)
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

function white(){

    cor = "#ffffff"
    cor2 = "black"

}



//Carregador da pagina
window.addEventListener("load", startup, false);

//Puxa o input color
//após o evento de entrada da cor
function startup() {
    cores = document.querySelector("#cores");
    cores.addEventListener("input", updateFirst, false);
    bbb = document.querySelector("#maa");
    bbb.addEventListener("input", updateSecond, false);
}


//Mudar tamanho do brush, simultaneo
function updateSecond(event){
    console.log(event.target.value)

    tamanho = event.target.value;
    console.log(tamanho)
}


//Muda a cor do ponteiro simultaneo de acordo com a acor escolhida
function updateFirst(event) {
    cor = event.target.value;
    console.log(event.target.value)
    
    if (cor == "#ffffff"){
        cor2 = "#000000"
    }else{
        cor2 = "#ffffff"
    }

}


//Download da imagem
saveImg.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = `Kid's Code.jpg`;
    link.href = c.toDataURL();
    link.click()
});

function desenho1(){
    ctx.clearRect(0,0,600,400)
    ctx.drawImage(fundo,0,0,600,400)

    posX = 300
    posY = 200
}

function desenho2(){
    ctx.clearRect(0,0,600,400)
    ctx.drawImage(carro,0,0,600,400)

    posX = 300
    posY = 200
}



function desenho3(){
    ctx.clearRect(0,0,600,400)
    ctx.drawImage(casa,0,0,600,400)

    posX = 300
    posY = 200
}


function abrirImagens(){
    var x = document.getElementById("imagens");

    if (x.style.display == "none"){
        x.style.display = "block";
    }else {
        x.style.display = "none"
    }
}
