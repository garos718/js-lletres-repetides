var nom = ["E","S","T","E","B","A","N"];
var lletres = new Map();

for (var i = 0; i < nom.length; i++) {

    if(lletres.get(nom[i]) != null) {
        var cont = lletres.get(nom[i]);
        lletres.set(nom[i], cont+1);
    }
    else {
        lletres.set(nom[i],1);
      }
            
}

for (const [k, v] of lletres) {
    console.log(k, v);
}