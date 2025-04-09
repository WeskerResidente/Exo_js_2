function truncate(texte, maxLength) {
    if (texte.length > maxLength) {
        return texte.slice(0, maxLength) + "...";
    }
    return texte;
}

let result = truncate("Je prefre le SASS à Tailwind", 20);
console.log(result); 