var nom = ["E","S","T",3,"B","A","N"];

for (var i = 0; i < nom.length; i++) {
if (nom[i]=="A" || nom[i]=="E" || nom[i]=="I" || nom[i]=="O" || nom[i]=="U") {
    console.log("He trobat la VOCAL: ", nom[i]);
}   else if (nom[i]==0 || nom[i]==1 || nom[i]==2 || nom[i]==3 || nom[i]==4 || nom[i]==5 || nom[i]==6 || nom[i]==7 || nom[i]==8 || nom[i]==9) {
    console.log("Els noms de persones no contenen el número: ", nom[i]);
}
    else {
    console.log("He trobat la CONSONANT: ", nom[i]);
}
}