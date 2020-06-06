//Define independent functions
function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}` ;
}

function leashDog(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}` ;
}

function walkToPark(dogName, dogBreed) {
    return `Walk to the park with ${dogName} the ${dogBreed}` ;
}

function throwFrisbee(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}` ;
}

function walkHome(dogName, dogBreed) {
    return `Walk home with ${dogName} the ${dogBreed}` ;
}

function unleashDog(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}` ;
}

//Create an array that contains each function
let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

//Iterate over the array "routine" calling each independent function
//Store the return value of each function in a array
//Return the array of return values
function exerciseDog(dogName, dogBreed) {
    let returnValues = [ ]
for (let i = 0; i<routine.length; i+=1) {
    let callEachFunction = routine[i](dogName, dogBreed);
    returnValues.push(callEachFunction);
}
return returnValues
}