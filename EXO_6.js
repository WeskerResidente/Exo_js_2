function mostFrequent(fruits) {
    let m = {}
    let maxCount = 0
    let res = null
    for (let x of fruits) {
        m[x] = (m[x] || 0) + 1;

        if (m[x] > maxCount) {
            maxCount = m[x]
            res = x
        }
    }
    return res
}

let fruits = ["apple", "banana", "cherry", "apple", "apple"]
console.log(mostFrequent(fruits))