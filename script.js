/*In this challenge, a farmer is asking you to tell him how many legs can be
counted among all his animals. The farmer breeds three species: Chickens, Cows, and Pigs.
The farmer has counted his animals and he gives you a subtotal for each species.
You have to implement a function that returns the total number of legs of all the animals.*/

function howManyLegs(chickens, cows, pigs){
    var chickens = chickens * 2
    var cows = cows * 4
    var pigs = pigs * 4
    total_legs = chickens + cows + pigs
    return total_legs
}

console.log(howManyLegs(1,1,1))