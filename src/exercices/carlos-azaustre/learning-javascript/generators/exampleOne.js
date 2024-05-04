// Comunication 'Bi-Directional'.

function* questionGenerator() {
    const name  = yield "What's your name?";
    const quest = yield `Hi ${name}, what is your quest?`;
    yield `To seek the ${quest}!`;
}

const generator = questionGenerator();

console.log(generator.next().value);             // "What's your name?"
console.log(generator.next("Arthur").value);     // "Hi Arthur, what is your quest?"
console.log(generator.next("Holy Grail").value); // "To seek the Holy Grail!"