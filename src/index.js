import cipher from './cipher.js';


const string = '';
const offset = 0;

//refs 
let ButtonDecode = document.getElementById("decode");
let ButtonEncode = document.getElementById("encode");

function imprimirDatos() {
    string = document.getElementById("mensajeACodificar").value;
    number = document.getElementById("cantidadDesplazamiento").value;

}

ButtonEncode.onclick = function () {

    let string = document.getElementById('mensajeACodificar').value
    let offset = document.getElementById('cantidadDesplazamiento').value

    //Conexión con Cipher
    let resultado = cipher.encode(offset, string)
    // Visualizar en pantalla
    document.getElementById("result").value = resultado
};

ButtonDecode.onclick = function () {

    let string = document.getElementById('mensajeACodificar').value
    let offset = document.getElementById('cantidadDesplazamiento').value

    //Conexión con Cipher
    let resultado = cipher.decode(offset, string)
    //Visualizar en pantalla
    document.getElementById("result").value = resultado

};


console.log(cipher);