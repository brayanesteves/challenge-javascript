/**
 * PERFECT CITY
 * 
 * Consider a city where the streets are perfectly laid out to form an
 * infinite square grid. In this city finding the shortest path between
 * two given points (an origin and a destination) is much easier than in 
 * other more complex cities. As a new UBER developer, you are tasked to
 * create an algorithm that does this calculation.
 * Given user's deperture and destination coordinates, each of them located
 * on some street, find the length of the shortest route between them
 * assuming that cars can only more along the streets. Each street can be 
 * represented as a straight line defined by the "x = n" or "y = n" formula,
 * where "n" is an integer.
 * 
 * EXAMPLE
 * 
 * For 
 * 
 * departure = [0.4, 1] and
 * destination = [0.9, 3], the output should be
 * solution(departure, destination) = 2.7
 * 0.6 + 2 + 0.1 = 2.7,
 * Which is the answer
 */
function solution(departure, destination) {
    if(~~departure[1] === departure[1]) {
        let x = Math.ceil(Math.min(departure[0], destination[0]));
        let y = Math.floor(Math.max(departure[0], destination[0]));

        return Math.abs(departure[1] - destination[1])  + Math.min(Math.abs(x - departure[0]) + Math.abs(x - destination[0]), Math.abs(y - departure[0]) + Math.abs(y - destination[0]));
    } else {
        let x = Math.ceil(Math.min(departure[1], destination[1]));
        let y = Math.floor(Math.max(departure[1], destination[1]));

        return Math.abs(departure[0] - destination[0])  + Math.min(Math.abs(x - departure[1]) + Math.abs(x - destination[1]), Math.abs(y - departure[1]) + Math.abs(y - destination[1]));
    }
}
let departure   = [0.4, 1];
let destination = [0.9, 3];
console.log(solution(departure, destination));