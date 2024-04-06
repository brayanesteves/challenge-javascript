/**
 * [SPANISH]:
 * Libera todos los animales del Zoológico.
 * Solo devuelve los animales que liberaste.
 * |=========================================|
 * [ENGLISH]:
 * Release all the animals in the Zoo.
 * Only return the animals you released.
 */
const zoo = [[], ['Monkey'], ['Giraffe'], [['Rhino', 'Unicorn']], [[['Lion']]]];

// SOLUTION Nº0.
const releaseAnimalsRecursive = (zoo) => {
    let animals = [];

    zoo.forEach((cage) => {
        if(Array.isArray(cage)) {
            // Recursive.
            animals.push(...releaseAnimalsRecursive(cage));
        } else {
            animals.push(cage);
        }
    });
    return animals;
};
console.log(releaseAnimalsRecursive(zoo));

// SOLUTION Nº1.
const releaseAnimalsFlat = (zoo) => {    
    return zoo.flat(Infinity);
};
console.log(releaseAnimalsFlat(zoo));