import cipher from './cipher.js';


const string ='';
const offset = 0;

let ButtonDecode = document.getElementById("decode");
let ButtonEncode = document.getElementById("encode");

function imprimirDatos(){
    string = document.getElementById("mensajeACodificar").value;
    number = document.getElementById("cantidadDesplazamiento").value;

} 

ButtonEncode.onclick = function(){
    actionData();
    document.getElementById("result").value = cipher.encode(string,offset);
    document.getElementById("result").innerHTML = cipher.encode(string, offset);
};

ButtonDecode.onclick = function() {
    actionData();
    document.getElementById("result").value = cipher.decode(string, offset);
    document.getElementById("result").innerHTML = cipher.decode(string, offset);

};


console.log(cipher);

