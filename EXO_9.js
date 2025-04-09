function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

const vegetables = ['courgettes', 'poivron', 'piment'];
const food = ['pizza', 'spaghetti', 'viande'];

console.log(mergeArrays(vegetables, food));