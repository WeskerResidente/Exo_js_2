var arr = ["january", "february", "january",  "march", "february", "february", "april"];   

function removeDuplicates(arr) { 

    return arr.filter((item, index) => arr.indexOf(item) === index);

}    

console.log(removeDuplicates(arr)); 
