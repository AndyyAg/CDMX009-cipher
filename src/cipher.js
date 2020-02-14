const cipher = {
    string: document.getElementById("mensajeACodificar").value, 
    offset: parseInt(document.getElementById("cantidadDesplazamiento").value),

    //FUNCIÓN PARA CIFRAR STRING//
    encode: function (string, offset){
        let resultCifer = "";  //Almacenará el resultado final//

        for(var i=0; i < texto.length; i++){
            let ascii = texto.charCodeAt(i);

            let formulaCifrar;  //Almacena fórmula del resultado
            let nuevaLetra;   // Almacena nuevo valor de la letra decifrada

            if (65 >= ascii && ascii <= 90) { //Revisar en mayúsculas//
                formulaCifrar = (ascii - 65 + offset) % 26 + 65;
                nuevaLetra = String.fromCharCode(formulaCifrar);
                resultCifer+=nuevaLetra;
            } else if (97 <= ascii && ascii <= 122){

                formulaCifrar = (ascii -97 - offset) %26 + 97;
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
    ,decode: function (string, offset){
        let resultDecifer ="";  //Almacenará valor del string descifrado//
        
        for(var i=0; i < texto.length; i++){
            let ascii = texto.charCodeAt(i);

            let formulaDescifrar;
            let nuevaLetra;

            if (65 >= ascii && ascii <= 90){
                formulaDescifrar = (ascii - 13 - offset) %26 + 65;
                nuevaLetra = String.fromCharCode(formulaDescifrar);
                resultDecifer+=nuevaLetra;
            } else if (ascii >= 97 && ascii <= 122){
                formulaDescifrar = (ascii -45 - offset) %26 + 97;
                nuevaLetra = String.fromCharCode(formulaDescifrar);
                resultDecifer+=nuevaLetra;
            } else if (ascii === 32){
                resultDecifer += " ";
            } else{
                break;
            }
        }
        return resultDecifer;
    }
};

export default cipher;