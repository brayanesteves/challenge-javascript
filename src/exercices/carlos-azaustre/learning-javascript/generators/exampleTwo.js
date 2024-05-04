// Comunication 'Bi-Directional'.

function* numberGenerator() {
    yield 1;
    yield 2;
}

function* alphabetGenerator() {
    yield "a";
    yield "b";
}

function* combinedGenerator() {
    yield* numberGenerator();
    yield* alphabetGenerator();
}

for(const value of combinedGenerator()) {
    console.log(value); // Output: 1, 2, 'a', 'b'
}