function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}

let sentence = "I love prommaging";
console.log(reverseWords(sentence));