function after5s(x) {
    return new Promise(res => {
        setTimeout(() => {
            res(x);
        }, 5000);
    });
}

async function mult(input) {
    const f = await after5s(3);
    const g = await after5s(4);
    return input * f * g;
}

mult(2).then(value => {
    console.log(value); // 24 después de 5 segundos
});