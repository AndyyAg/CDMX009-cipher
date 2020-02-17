const cipher = {
    string: document.getElementById("mensajeACodificar").value,
    offset: parseInt(document.getElementById("cantidadDesplazamiento").value),

    //FUNCIÓN PARA CIFRAR STRING//
    encode: function (texto, offset) {
        let resultCifer = "";  //Almacenará el resultado final//

        for (var i = 0; i < texto.length; i++) {
            let ascii = texto.charCodeAt(i).split;

            let formulaCifrar;  //Almacena fórmula del resultado
            let nuevaLetra;   // Almacena nuevo valor de la letra decifrada

            if (ascii > 64 && ascii < 91) { //Revisar en mayúsculas//
                formulaCifrar = (ascii - 65 + offset) % 26 + 65;
                nuevaLetra = String.fromCharCode(formulaCifrar);
                resultCifer += nuevaLetra;
            } else if (ascii > 96 && ascii < 123) { //Revisión en minúsculas//
                formulaCifrar = (ascii - 97 + offset) % 26 + 97;
                nuevaLetra = String.fromCharCode(formulaCifrar);
                resultCifer += nuevaLetra;
            } else if (ascii === 32) { //Verificar espacios//
                resultCifer += " ";
            } else {
                break;
            }
        }
        return resultCifer;
    }

    //FUNCIÓN PARA DESCIFRAR STRING//
    , decode: function (texto, offset) {
        let resultDecifer = "";  //Almacenará valor del string descifrado//

        for (var i = 0; i < texto.length; i++) {
            let ascii = texto.charCodeAt(i).split;

            let formulaDescifrar;
            let nuevaLetra;

            if (ascii > 64 && ascii <91) {
                formulaDescifrar = (ascii + 65 - offset) % 26 + 65;
                nuevaLetra = String.fromCharCode(formulaDescifrar);
                resultDecifer += nuevaLetra;
            } else if (ascii > 96 && ascii <123) {
                formulaDescifrar = (ascii + 97 - offset) % 26 + 97;
                nuevaLetra = String.fromCharCode(formulaDescifrar);
                resultDecifer += nuevaLetra;
            } else if (ascii === 32) {
                resultDecifer += " ";
            } else {
                break;
            }
        }
        return resultDecifer;
    }
};

export default cipher;