/**
 * FANCY RIDE
 * 
 * Being a new UBER user, you have $20 off your "first ride".
 * You want to make the most out of it and drive in the fanciest
 * car you afford, without spending any out-of-pocket money.
 * There are "5 options", from the least to the most expensive:
 * 
 * "UberX", "UberXL", "UberPlus", "UberBlack" and "UberSUV"
 * 
 * You know the length 1 of your "ride in miles" and how much one "mile costs"
 * for each car. Find the best car you can afford.
 * 
 * EXAMPLE
 * 
 * For i = 30 and fares = [0.3, 0.5, 0.7, 1, 1.3], the output should be
 * solution (1, fares) = "UberXL"
 * 
 * The cost for the "ride" in this car would be $15, which you can afford, but
 * "UberPlus" would cost $21; which is too much for you.
 */

function simplified_solution(l, fares) {
    let options = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
    fares.sort((a, b) => a - b);
    let i = 0;
    for(; i < fares.length; i++) if(fares[i] * l > 20) break;
    return options[i > 0 ? i - 1 : 0];
}

function noSimplified_solution(length, fares) {
    const credit = 20;
    const rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
    // ¿Si tenemos que ordenar los fares?
    const index = fares.findIndex(fare => {
        console.log({length, fare, result: fare * length})
        return (fare * length) > credit;
    });

    console.log(index);
    console.log(rides[index - 1]);

    return index < 0 ? rides.at(-1) : rides[index - 1];
}

let length = 30;
let fares  = [0.3, 0.5, 0.7, 1, 1.3]
console.log(noSimplified_solution(length, fares));

length = 30;
fares  = [0.3, 0.5, 0.6, .06, 0.6]
console.log(noSimplified_solution(length, fares));