
let body=document.querySelector("body")

let primeiraDiv= document.createElement("div")
primeiraDiv.setAttribute("id", "lampada")

let imgLampDesligada=document.createElement("img")
imgLampDesligada.setAttribute("id", "lamp")
imgLampDesligada.src="./fotos/desligada.png"

body.append(primeiraDiv)
primeiraDiv.append(imgLampDesligada)



let segundaDiv=document.createElement("div")
segundaDiv.setAttribute("id", "acender")
let button=document.createElement("button")
button.setAttribute("id", "ligarDesligar")
let imgInterruptor=document.createElement("img")
imgInterruptor.setAttribute("id", "ligar")
imgInterruptor.src="./fotos/interruptor2.png"

body.append(segundaDiv)
segundaDiv.append(button)
button.append(imgInterruptor)


document.querySelector("#ligarDesligar").onclick=interruptor;
let lamp=document.querySelector("#lamp")
lamp.value="off"


function interruptor (){
    if(lamp.value=="off"){
       lamp.src="./fotos/acessa1.png"
       imgInterruptor.src="./fotos/interruptor2.png"
        body.setAttribute( "style", "background-color: #f5e282")
        lamp.value="on"
      
    }else if(lamp.value=="on"){
        lamp.src="./fotos/desligada.png"
        imgInterruptor.src="./fotos/interruptor1.png"
        body.setAttribute("style","background-color: rgba(34, 33, 33, 0.966)")
        lamp.value="off"

    }
}



