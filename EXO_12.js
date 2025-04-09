var arr = ["january", "february", "january",  "march", "february", "february", "april"];

const Titlecase = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr;
}

console.log(Titlecase(arr));
 