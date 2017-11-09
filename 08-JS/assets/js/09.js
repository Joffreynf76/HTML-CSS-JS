// Les boucles

// -- La boucle for

for(let i=1 ; i<=10  ; i++){
    document.write("<p>Instruction executée : <strong>" + i + "</strong></p>");
}

// -- La boucle while
var j=1;
while(j<=10) {
    document.write("<p>Instruction executée : <strong>" + j + "</strong></p>");
    j++;
}


// Exercice

// -- Supposons le tableau suivant
var Prenoms = ['Hugo', 'Jean', 'Matthieu', 'Luc', 'Pierre', 'Marc'];

/* CONSIGNE : Grâce à une boucle FOR, afficher la liste des prénoms du tableau suivant dans la console ou sur votre page. */

for(let k=0 ; k<=5 ; k++){
    console.log(Prenoms[k]);
}