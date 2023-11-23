/**
 * [ENGLISH]
 * FizzBuzz
 * Write a <b>loop</b> that prints the numbers from 1 to 17 to the console.
 * It must meet the following conditions: if the number to be printed is divisible by 3,
 * it must print the <i><b>string</b></i> <b>'Fizz'</b> to the console.
 * Instead, if it is divisible by 5, it should show: <b>'Buzz'</b>.
 * Finally, if it is divisible by both it should show: <b>'FizzBuzz'</b>.
 * Example:
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * ...
 * 14
 * FizzBuzz
 * 16
 * =========
 * [SPANISH]
 * FizzBuzz
 * Escribí un <b>loop</b> que imprima en la consola los números del 1 al 17.
 * Deberá cumplir las siguientes condiciones: si el número a imprimir es multiplo de 3,
 * debe mostrar en la consola el <i><b>string</b></i> <b>'Fizz'</b>.
 * En cambio, si es múltiplo de 5, debe mostrar: <b>'Buzz'</b>.
 * Por último, si es múltiplo de ambos debe mostrar: <b>'FizzBuzz'</b>.
 * Ejemplo:
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * ...
 * 14
 * FizzBuzz
 * 16
 */

for(let i = 1; i <= 17; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

