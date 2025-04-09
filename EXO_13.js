function truncate(texte, maxLength) {
    if (texte.length > maxLength) {
        return texte.slice(0, maxLength) + "...";
    }
    return texte;
}

let result = truncate("Le développement en JavaScript est passionnant.", 20);
console.log(result); 