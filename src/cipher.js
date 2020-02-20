let alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ")
const cipher = {

    //Fórmula para crear codificación en mayúsculas//
    encode(string = document.getElementById("mensajeACodificar"), offset = document.getElementById("cantidadDesplazamiento"), back) {
        let result = []
        offset = Number(offset)
        for (let i of string) {
            if (i.charCodeAt(0) === 32) {
                result.push(" ")
                continue
            }
            i = i.toUpperCase()
            let encodeFormMay = back ? (i.charCodeAt(0) + 65 - offset) % 26 + 65 : (i.charCodeAt(0) - 65 + offset) % 26 + 65;
                result.push(String.fromCharCode(encodeFormMay))
        
        }
    

        return result.join("")
    },

    //Fórmula para decodificar en mayúsculas//

    decode(string, offset){
        return this.encode(string, offset, true)
    }
}
export default cipher;