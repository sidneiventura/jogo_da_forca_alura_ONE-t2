//seletores e variaveis

var palavras = ['ALURA', 'ORACLE','JAVASCRIPT', 'HTML', 'CSS','SANFONA','ESTRELA', 'TECLADO']
var  tabuleiro = document.getElementById('forca').getContext('2d')
var letras = [];
var palavraCorreta = "";
var erros = 9;

function escolherPalavraSecreta(){
    var palavra = palavras[Math.floor(Math.random()*palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
    return palavra
}

function escreverTracinhos(){
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.beginPath()
    var eixo = 600/palavraSecreta.length
    for(let i=0; i < palavraSecreta.length; i++){
        tabuleiro.moveTo(300 + (eixo*i), 640)
        tabuleiro.lineTo(350 + (eixo*i), 640)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
}escreverTracinhos(escolherPalavraSecreta())


function escreverLetraCorreta(index){
    tabuleiro.font = "bold 60px Inter";
    tabuleiro.lineWidth = 6
    tabuleiro.lineJoin = "round"
    tabuleiro.lineCap = "round"
    tabuleiro.strokeStyle = "#0A3871"

    var eixo = 600/palavraSecreta.length
    tabuleiro.fillText(palavraSecreta[index],305+(eixo*index), 630)
    tabuleiro.stroke()

    
    }

 
function escreverLetraIncorreta(letra, errorsLeft){
    tabuleiro.font = "bold 20px Inter";
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.fillText(letra, 535+(30*(1-errorsLeft)), 710,40)
}

function verificarLetraCorreta(key){
    if(letras.length < 1 || letras.indexOf(key) < 0){
        letras.push(key)
        return false
    }
    else{
        letras.push(key.toUpperCase())
        return true
    }
}

function adionarLetraCorreta(i){
    palavraCorreta += palavraSecreta[i].toUpperCase
}

function adicionarLetraIncorreta(letter){
    if(palavraSecreta.indexOf(letter) <= 0){
        erros-=1
    }
}
document.onkeydown= (e) => {
    var letra = e.key.toUpperCase()
    if(!verificarLetraCorreta(e.key)){
        if(palavraSecreta.includes(letra)){
            adionarLetraCorreta(palavraSecreta.indexOf(letra))
                for(let i=0; i < palavraCorreta.length; i++){
                    if(palavraSecreta[i]===letra){
                        escreverLetraCorreta(i)
                    }
                }
            }
          else{
            if (!verificarLetraCorreta(e.key))
            return
            adicionarLetraIncorreta(letra)
            escreverLetraIncorreta(letra, erros)
        }
    }
}
