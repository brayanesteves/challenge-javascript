/**
 * FARE ESTIMATOR
 * 
 * UBER is building a "Fare Estimator" that can tell you how much
 * your ride will cost before you request it. It works by passing 
 * approximated "Ride distance" and "Ride time" through this formula:
 * 
 * (Cost per minute) * (Ride time) + (Cost per mile) * (Ride distance)
 * 
 * Where "Cost per minute" and "Cost per mile" depend on the 'car type'.
 * 
 * You are one of the engineers building the "Fare Estimator", so knowing
 * "Cost per minute" and "Cost per mile" for each 'car type', as well as 
 * "Ride distance" and "Ride time", return the "Fare Estimates" for all
 * 'car types'.
 * 
 * EXAMPLE:
 * 
 * For
 * 
 * ride_time = 30,
 * ride_distance = 7,
 * cost_per_minute = [0.2, 0.35, 0.4, 0.45], and
 * cost_per_mile = [1.1, 1.0, 2.3, 3.5], the output should be
 * 
 * solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) = [13.7, 23.1, 28.1, 38]
 * 
 */
function solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    return cost_per_mile.map((rideMileCost, index) => {
        const rideMinuteCost = cost_per_minute[index];
        return (rideMinuteCost * ride_time) + (rideMileCost * ride_distance);
    });
}
let ride_time       = 30;
let ride_distance   = 7;
let cost_per_minute = [0.2, 0.35, 0.4, 0.45];
let cost_per_mile   = [1.1, 1.0, 2.3, 3.5];
console.log(solution(ride_time, ride_distance, cost_per_minute, cost_per_mile));
// (cost_per_minute) * (ride_time) + (cost_per_mile) * (ride_distance)