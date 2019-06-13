var nom = ["E","S","T",3,"B","A","N"];

for (var i = 0; i < nom.length; i++) {
if (nom[i]=="A" || nom[i]=="E" || nom[i]=="I" || nom[i]=="O" || nom[i]=="U") {
    console.log("He trobat la VOCAL: ", nom[i]);
}   else if (!isNaN(nom[i])) {
    console.log("Els noms de persones no contenen el número: ", nom[i]);
}
    else {
    console.log("He trobat la CONSONANT: ", nom[i]);
}
}