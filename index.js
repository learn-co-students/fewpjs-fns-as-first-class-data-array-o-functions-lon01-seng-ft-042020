
// wakeDog = console.log("Wake Byron the poodle");
// leashDog = console.log("Leash Byron the poodle");
// walkToPark = console.log("Walk to the park with Byron the poodle");
// throwFrisbee = console.log("Throw the frisbee for Byron the poodle");
// walkHome = console.log("Walk home with Byron the poodle");
// unleashDog = console.log("Unleash Byron the poodle");

function wakeDog(dogName, dogBreed) {
    const string = `Wake ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}
function leashDog(dogName, dogBreed) {
    const string = `Leash ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}
function walkToPark(dogName, dogBreed) {
    const string = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}
function throwFrisbee(dogName, dogBreed) {
    const string = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}
function walkHome(dogName, dogBreed) {
    const string = `Walk home with ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}
function unleashDog(dogName, dogBreed) {
    const string = `Unleash ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

const routine = [
    wakeDog, leashDog, walkToPark,throwFrisbee, walkHome, unleashDog
]

function exerciseDog(dogName, dogBreed){
    const resultArray =[]
    for (let i=0; i<routine.length; i++){
        routine[i](dogName, dogBreed);
        resultArray.push(routine[i](dogName, dogBreed));
    }
    return resultArray;
}