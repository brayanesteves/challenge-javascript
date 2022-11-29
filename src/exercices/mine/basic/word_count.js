/**
 * ENGLISH:
 */


// ============================================== //

/**
 * SPANISH:
 * Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
 * La frase y la palabra deben ser parametros de una función.
 * Ejemplos:
 * coincidencias("hola soy una palabra en una frase, PALABRA", "palabra"); // Devuelve: 2
 * coincidencias("soy la frase", "victor"); // Devuelve: 0
 * 
 * Cómo hacerlo:
 * - Función con parametro, dos parámetros "frase" y "busqueda".
 * - Poner "string" en minusculas y limpiarlo.
 * - Comprobar si la búsqueda esta incluida en la frase.
 * - Crear un "array" de palabras de la frase.
 * - Mapear esas palabras y hacer un contador de cada una.
 * - Devolver el contador de la búsqueda.
 */
function coincidencias(frase, busqueda) {
    let texto_limpio = frase.toLowerCase().replace(/[¡!.,]/gi, "");
    console.log(texto_limpio);
    let resultado = 0;
    if(texto_limpio.includes(busqueda)) {
        let palabras = texto_limpio.split(" ");
        console.log(palabras);
        /**
         * Mapeamos
         */
        let mapa = {};
        /**
         * Recorremos
         */
        for(let palabra of palabras) {
            if(mapa[palabra]) {
                mapa[palabra]++;
            } else {
                mapa[palabra] = 1;
            }
        }
        console.log(palabras);
        console.log(mapa);
        resultado = mapa[busqueda];
    } else {
        return 0;
    }
    return resultado;
}

console.log("Número de coincidencia de la frase es: ",coincidencias("hola soy una palabra en una frase, PALABRA", "palabra"));