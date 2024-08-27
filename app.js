const textoUsuario = document.getElementById("textoUsuario");
const mensajeSalida = document.getElementById("mensajeSalida");
const encriptadorImagen = document.getElementById("encriptadorImagen");
const mensajeCopiar = document.getElementById("buttonCopy");
const mensaje = document.getElementById("izquierdoMensaje");
const listado = ["á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "LL", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const advertencia = listado.join("\n\n");


const matriz = [
    
    ["e" , "enter"],
    ["i" , "imes"],
    ["a" , "ai"],
    ["o" , "ober"],
    ["u" , "ufat"]
]

function encriptarTexto(){
    const texto = encriptar(textoUsuario.value);
    mensajeSalida.value = texto;
}

function encriptar (fraseAEncriptar){
    if(/^[a-z\s]+$/.test(fraseAEncriptar)){
        for (let i = 0 ; i <matriz.length ; i++) {
            if(fraseAEncriptar.includes(matriz[i][0])){
                fraseAEncriptar = fraseAEncriptar.replaceAll(
                    matriz[i][0],
                    matriz[i][1]
                );
            } else{
                limpiarCampos()
            }
        }
        textoUsuario.value="";

        mensajeSalida.style.display ="block" ;
        encriptadorImagen.style.display = "block" ;
        encriptadorImagen.style.display = "none" ;
        mensajeCopiar.style.display = "block";
        mensaje.style.display = "none";
        return fraseAEncriptar;
    }
}

function desencriptarTexto(){
    const texto = desencriptar(textoUsuario.value);
    mensajeSalida.value = texto;
}

function desencriptar (fraseADesencriptar){
    if(/^[a-z\s]+$/.test(fraseADesencriptar)){
        for(var i = 0 ; i < matriz.length; i++){
            if(fraseADesencriptar.includes(matriz[i][1])){
                fraseADesencriptar = fraseADesencriptar.replaceAll(
                    matriz[i][1],
                    matriz[i][0]
                ) ;
            } else{
                limpiarCampos();
            }
        }
        textoUsuario.value="";

        mensajeSalida.style.display ="block" ;
        encriptadorImagen.style.display = "none";
        mensajeCopiar.style.display = "block";
        mensaje.style.display = "none" ;
        return fraseADesencriptar;
    } 
}


function copyToClipboard(){
    return navigator.clipboard.writeText (mensajeSalida.value);
}

function borrarTexto() {
    let borrar = document.getElementById("textoUsuario", "textoUsuario").value = "";
    borrar = document.getElementById("textoUsuario").value = "";
    borrar = document.getElementById("izquierdoMensaje").value = "";
    document.location.reload();
}

function limpiarCampos() {
    console.log('limpiar')
}

