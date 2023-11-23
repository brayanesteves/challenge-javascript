/**
 * [ENGLISH]
 * FizzBuzz Revenge.
 * Create a function that has the same functionality as the previous <b>'FizzBuzz'</b>,
 * but that receives as a parameter the words to be printed (Instead of 'Fizz' and 'Buzz')
 * and the numbers that activate them and the maximum number of iterations.
 * Expected output: fizzBuzz('Code', 'Project', 2, 7, 17)
 * 1
 * Code
 * 3
 * Code
 * 5
 * Code
 * Project
 * ...
 * CodeProject
 * 15
 * Code
 * 17
 * =========
 * [SPANISH]
 * Venganza de FizzBuzz.
 * Creá una función que tenga la misma funcionalidad que el <b>'FizzBuzz'</b> anterior,
 * pero que reciba por parámetro las palabras a imprimir (En vez de <b>'Fizz'</b> y
 * <b>'Buzz'</b>) y los números con los que se activan y el número máximo de iteraciones.
 * Output esperado: fizzBuzz('Codigo', 'Proyecto', 2, 7, 17)
 * 1
 * Codigo
 * 3
 * Codigo
 * 5
 * Codigo
 * Proyecto
 * ...
 * CodigoProyecto
 * 15
 * Codigo
 * 17
 */
function fizzBuzz(word1, word2, num1, num2, num3) {
    for(let i = 1; i <= num3; i++) {
        if(i % num1 === 0 && i % num2 === 0) {
            console.log(`${word1}${word2}`);
        } else if(i % num1 === 0) {
            console.log(word1);
        } else if(i % num2 === 0) {
            console.log(word2);
        } else {
            console.log(i);
        }
    }
}
fizzBuzz('Code', 'Project', 2, 7, 17);