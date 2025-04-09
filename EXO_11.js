let number = [1, 2, 3, 4, 5, 6];

function isSorted(number) {
    for (let i = 0; i< number.length -1;i++) {
        if (number[i] > number[i+1]) {
            return false;
        }

    }
    return true 
}

console.log(isSorted(number));