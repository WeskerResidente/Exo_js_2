const animals = ["ant", "bison", "camel", "duck", "elephant"];
const reverseAnimals = []


for(let i = animals.length-1; i >= 0; i--) {
    // console.log(animals[i])
    reverseAnimals.push(animals[i])
}

console.log(reverseAnimals);
