import cipher from './cipher.js';


const string ='';
const number = 0;

let ButtonDecode = document.getElementById("decode");
let ButtonEncode = document.getElementById("encode");

function imprimirDatos(){
    string = document.getElementById("mensajeACodificar").value;
    number = document.getElementById("cantidadDesplazamiento").value;

} 

ButtonEncode.onclick = function(){
    actionData();
    document.getElementById("result").value = cipher.cifrar(string,number);
    document.getElementById("result").innerHTML = cipher.cifrar(string, number);
};

ButtonDecode.onclick = function () {
    actionData();
    document.getElementById("result").value = cipher.descifrar(string, number);
    document.getElementById("result").innerHTML = cipher.descifrar(string, number);

};


console.log(cipher);

