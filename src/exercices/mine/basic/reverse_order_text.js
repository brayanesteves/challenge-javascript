/**
 * ENGLISH:
 */


// ============================================== //

/**
 * SPANISH:
 * Dada una cadena de texto, darle la vuelta a invertir el orden de sus carácteres,
 * sin usar métodos propios del lenguaje,
 * solo estructuras de control.
 * 
 * Ejemplo:
 * invertir('hola');   // Devuelve 'alah'
 * invertir('victor);  // Devuelve 'rotciv'
 * invertir('robles'); //Devuelve 'selbor'
 * 
 * ¿Cómo hacerlo?
 * - Función con parámetro "texto".
 * - Crear una variable para guardar la cadena invertida.
 * - Bucle que recorra el "string" y guarde los caráteres en la variable.
 */
function invertir(texto) {
    // Crear una variable para guardar la cadena invertida.
    let invertido = "";
    for(let letra of texto) {
        console.log(letra);
        /**
         * Guardar la cadena invertida.
         */
        invertido = letra + invertido;
    }
    return invertido;
}
console.log("Texto invertido: ", invertir("Halcón Bit"));

function _invertir(texto) {
    return texto.split("").reverse().join('');
}
console.log("Texto invertido: ", _invertir("Halcón Bit"));
