var wakeDog = function(dogName="zbark", dogBreed="poodle"){
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
}
var leashDog = function(dogName="zbark", dogBreed="poodle"){
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
}
var walkToPark = function(dogName="zbark", dogBreed="poodle"){
    console.log(`Walk to the with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
}
var throwFrisbee = function(dogName="zbark", dogBreed="poodle"){
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}
var walkHome = function(dogName="zbark", dogBreed="poodle"){
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
}
var unleashDog = function(dogName="zbark", dogBreed="poodle"){
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dog, breed) {
    return routine.map(fn => fn(dog, breed))
}