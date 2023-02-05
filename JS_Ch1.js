const textArea = document.querySelector(".Ingreso-txt");
const mensaje = document.querySelector(".Salida-txt");
const copia = document.querySelector(".copiar");
const txtCuadro = document.querySelector(".MensajeCuadro");
copia.style.display = "none"


function validarTexto(){
    if (textArea.value === "") {
        alert("El campo de texto no puede estar vacío");
        location.reload();
        return true;
    }
}


function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        txtCuadro.style.display ="none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

//variable matriz es arreglo de arreglo, basicamente dice que hay 5 valores (0-4) y cada uno puede tener 2 valores (0,1). 
//con for se va revisando si el texto incluye alguno de los valores y al que encuentra le remplaza el valor 0 por el 1 (encriptar) o el 1 por 0 (desencriptar)

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada //stringEncriptada es el parametro que se ingresa en la funcion
}



function btnDesencriptar(){
    if(!validarTexto()) {
        const textoEncriptado = desencriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        txtCuadro.style.display ="none"
        textArea.value = "";
        copia.style.display = "block"
    }    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}



