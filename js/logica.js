
var pantallaHome = document.querySelector(".home__contenido");
var pantallaAhorcado = document.querySelector(".ahorcado__contenido");

var palabras = ['ALURA', 'AHORCADO', 'HTML', 'ORACLE', 'JAVASCRIPT', 'LOGICA', 'PROGRAMACION', 'DESAFIO'];
var tablero = document.getElementById('horca').getContext('2d');
var palabraSecreta = "";
var letras = [];
var palabraCorrecta = "";
var errores = 8;
let letrasIncorrectas = [];
let numeroDeErrores = 8
let letraElegida = [];

// Sortea la palabra que será usada en el ahorcado
function escojerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra;
    console.log(palabra);
    return palabraSecreta
}

// verifica cual es la letra en que el usuario hizo clic
function verificarLetraClicada (key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {
      letras.push(key)
      return false
    }
    else {
      letras.push(key)
      return true
    }
}

function adicionarLetraCorrecta(i) {
    palabraCorrecta += palabraSecreta[i].toUpperCase()
}
  
function adicionarLetraIncorrecta(letter) {
    if (palabraSecreta.indexOf(letter) <= 0) {
      errores -= 1
    }
}

function iniciarJuego() {
    pantallaHome.style.display = "none";
    pantallaAhorcado.style.display = "flex";

    escojerPalabraSecreta();
    dibujarLineas();

    // captura la letra que el usuario escribió
    document.onkeydown = (e) => {
        // pone la letra en letra mayuscula
        let letra = e.key.toUpperCase()
        //verifica si el usuario todavia no ha perdido
        if (letrasIncorrectas.length < numeroDeErrores) {
            if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)) {
                if (palabraSecreta.includes(letra)) {
                    adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
                    for (let i = 0; i < palabraSecreta.length; i++) {
                        if (palabraSecreta[i] === letra) {
                            escrribirLetraCorrecta(i)
                            verificarVencedor(letra)
                        }
                    }
                }
                // si el usuario cometió más errores de los que son permitidos, 
                //llama las funciones que dibujan el ahorcado y exibe el mensaje de fin de juego
                else {
                if (!verificarLetraClicada(e.key) && !verificarVencedor(letra)) 
                    return
                    dibujarAhorcado(errores)
                    verificarFinJuego(letra)
                }
            }
        }else {
            alert("No tienes mas intentos, inicia un Nuevo Juego")
        }
    }

    //impide que teclas como shift y otras, sean consideradas errores y sean escritas
    function verificarLetra(keyCode) {
        if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
        return true;
        } else {
        return false;
        }
    }

    //Verifica si el usuario ha ganado
    function verificarVencedor(letra) {
        letraElegida.push(letra.toUpperCase());
        if (letraElegida.length == palabraSecreta.length) {
            ganaste()
        }  
    }

    function verificarFinJuego(letra) {
        //checa si la letra ha sido incluída en el array de  las letras correctas o incorrectas
        if(letraElegida.length < palabraSecreta.length) { 
            //incluye las letras ya digitadas en el arrau
            letrasIncorrectas.push(letra);
            //valida se el usuário cometió el numero maximo de errores
            if (letrasIncorrectas.length >= numeroDeErrores) {
                perdiste()
            }
            else if(letraElegida.length <= palabraSecreta.length-1) {
                adicionarLetraIncorrecta(letra)
                escribirLetraIncorrecta(letra, errores)
            }
        }
    }
}

function newGame() {
    location.reload();
}
function desistir() {
    location.reload();
    pantallaHome.style.display = "none";
    pantallaAhorcado.style.display = "flex";
}