const today = new Date();
currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML= `<span>${oLastModif}</span>`;