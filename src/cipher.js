const cipher = {

    encode(offset, string, back) {
        let resultEnc = []
        offset = Number(offset)

        for (let i of string) {

            if (i.charCodeAt(0) > 64 && i.charCodeAt(0) < 91) {
                //Fórmula para mayúsculas//
                    i = i.toUpperCase()
                     let encodeFormMay = back ? (i.charCodeAt(0) + 65 - offset) % 26 + 65 : (i.charCodeAt(0) - 65 + offset) % 26 + 65;
                     resultEnc.push(String.fromCharCode(encodeFormMay))
            } else if (i.charCodeAt(0) > 96 && i.charCodeAt(0) < 123) {
                //Fórmula para minúsculas NO MARCA MI DECODIFICADOR EN MINÚSCULAS **Revisar//
                    i = i.toLowerCase()
                    let encodeFormMin = back ? (i.charCodeAt(0) + 97 - offset) % 26 + 97 : (i.charCodeAt(0) - 97 + offset) % 26 + 97;
                    resultEnc.push(String.fromCharCode(encodeFormMin))
                //Formula para espacios
            } else if (i.charCodeAt(0) === 32) {
                    resultEnc.push(" ")
            } continue;
        }

        return resultEnc.join("")
    },


    decode(offset, string) {
        //Fórmula para decodificar//
        return this.encode(offset, string, true)
  

        /* let result = []
            offset = Number(offset)
            for (let i of string) {

                if (i.charCodeAt(0) > 64 && i.charCodeAt(0) < 91) {
                    i = i.toUpperCase()
                    //Fórmula para crear decodificación en mayúsculas//
                    let decodeFormMay = back ? (i.charCodeAt(0) - 65 + offset) % 26 + 65 : (i.charCodeAt(0) + 65 - offset) % 26 + 65;
                    result.push(String.fromCharCode(decodeFormMay))
                    //Formula para decodificar minúsculas
                } else if (i.charCodeAt(0) > 96 && i.charCodeAt(0) < 123) {
                    i = i.toLowerCase()
                    let decodeFormMin = back ? (i.charCodeAt(0) - 97 + offset) % 26 + 97 : (i.charCodeAt(0) + 97 - offset) % 26 + 97;
                    result.push(String.fromCharCode(decodeFormMin))
                    //Formula para espacios
                } else if (i.charCodeAt(0) === 32) {
                    result.push(" ")
                } continue;
            }*/


    }
}
export default cipher;