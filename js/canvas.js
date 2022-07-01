// Dibujar lineas de las letras
function dibujarLineas() {
    tablero.lineWidth = 2;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();
    let ancho = 600 / palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(50+(ancho*i),450)
        tablero.lineTo(90+(ancho*i),450)
    }
    tablero.stroke();
    tablero.closePath();
}

// Funcion escribir letra correcta
function escrribirLetraCorrecta(index) {
    tablero.font = '30px Inter';
    tablero.lineWidth = 2;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    let ancho = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],60+(ancho*index),430);
    tablero.stroke();
}

// Funcion escribir letra incorrecta
function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.lineWidth = 2;
    tablero.font = '20px Inter';
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    tablero.fillText(letra,50+(40*(10-errorsLeft)),500,110);
}

function dibujarAhorcado(puntaje) {
    tablero.lineWidth = 2;
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "#0A3871"
    if(puntaje===8){
        // Piso
        tablero.moveTo(150,350)
        tablero.lineTo(500,350)
    }
    if(puntaje===7){
        //poste lateral
        tablero.moveTo(200,50)
        tablero.lineTo(200,350)
    }
    if(puntaje===6){//palo de arriba 
        tablero.moveTo(200,50)
        tablero.lineTo(350,50)
    }
    if(puntaje===5){//cuerda
        tablero.moveTo(350,50)
        tablero.lineTo(350,100)
    }
    if(puntaje===4){//para cara
        tablero.moveTo(390,140)
        tablero.arc(350,140,40,0,Math.PI*2)
    }
    if(puntaje===3){//para corpo
        tablero.moveTo(350,180)
        tablero.lineTo(350,250)
    }
    if(puntaje===2){//para perna izquerda
        tablero.moveTo(350,250)
        tablero.lineTo(300,300)
    }
    if(puntaje===2){//para perna direita
        tablero.moveTo(350,250)
        tablero.lineTo(400,300)
    }
    if(puntaje===1){//para mão izquerda
        tablero.moveTo(350,210)
        tablero.lineTo(300,250)
    }
    if(puntaje===1){//para mão direita
        tablero.moveTo(350,210)
        tablero.lineTo(400,250)
    }
    tablero.stroke()
    tablero.closePath()
}

function perdiste() {
    tablero.font = ' bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="red"
    tablero.fillText("Fin del",550,200)
    tablero.fillText("Juego!",550,250)
}

function ganaste() {
    tablero.font = 'bold 35px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="green"
    tablero.fillText("Ganaste",470,200)
    tablero.fillText("Felicidades!",450,250)
}