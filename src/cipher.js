const cipher = {
    texto: document.getElementById("mensajeACodificar").value, 
    desplazamiento: parseInt(document.getElementById("cantidadDesplazamiento").value),

    //FUNCIÓN PARA CIFRAR STRING//
    cifrar: function (texto, desplazamiento){
        let resultCifer = "";  //Almacenará el resultado final//

        for(var i=0; i < texto.length; i++){
            let ascii = texto.charCodeAt(i);

            let formulaCifrar;  //Almacena fórmul del resultado
            let nuevaLetra;   // Almacena nuevo valor de la letra decifrada

            if (65 >= ascii && ascii <= 90) { //Revisar en mayúsculas//
                formulaCifrar = (ascii - 65 + desplazamiento) % 26 + 65;
                nuevaLetra = String.fromCharCode(formulaCifrar);
                resultCifer+=nuevaLetra;
            } else if (97 <= ascii && ascii <= 122){

                formulaCifrar = (ascii -97 - desplazamiento) %26 + 97;
                nuevaLetra = String.fromCharCode(formulaCifrar);
                resultCifer+=nuevaLetra;
            }else if (ascii === 32){
                resultCifer += " ";
            }else{
                break;
            }
        }
        return resultCifer;
    }
    
    //FUNCIÓN PARA DESCIFRAR STRING//
    ,descifrar: function (texto, desplazamiento){
        let resultDecifer ="";  //Almacenará valor del string descifrado//
        
        for(var i=0; i < texto.length; i++){
            let ascii = texto.charCodeAt(i);

            let formulaDescifrar;
            let nuevaLetra;

            if (65 >= ascii && ascii <= 90){
                formulaDescifrar = (ascii - 13 - desplazamiento) %26 + 65;
                nuevaLetra = String.fromCharCode(formulaDescifrar);
                resultDecifer+=nuevaLetra;
            } else if (ascii >= 97 && ascii <= 122){
                formulaDescifrar = (ascii -45 - desplazamiento) %26 + 97;
                nuevaLetra = String.fromCharCode(formulaDescifrar);
                resultDecifer+=nuevaLetra;
            } else if (ascii === 32){
                resultDecifer += " ";
            } else{
                break;
            }
        }
        return resultDecifer;
    },
};

export default cipher;