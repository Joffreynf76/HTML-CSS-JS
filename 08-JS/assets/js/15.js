// Déclarer un tableau numérique

var tableau = ["Hugo","Romain","Clément","Joffrey","Helene","Mathieu","Lou","Emilie","Rodolphe","Etienne"];
console.log(tableau);
console.log(tableau.length);
console.log(tableau[8] +" "+ tableau[5] +" "+ tableau[2]);

var i = 2;
console.log(tableau[i]);

for( let k=0 ; k<tableau.length ; k++ ) {
    console.log(k +" "+ tableau[k]);
} 

// Voyons comment procéder avec des objets

var contact = {
    prenom : "Terry",
    nom    : "Bacon",
    tel    : "06020101"
}

console.log(contact);

console.log(contact.prenom);
console.log(contact.nom);
console.log(contact.tel);


var etudiant = [
    {
        prenom : "Terry",
        nom : "Bacon",
        classe : "programmation"
    },
    {
        prenom : "Etienne",
        nom : "Dit-Jesus",
        classe : "Maternelle"
    },
    {
        prenom : "Hugo",
        nom : "Liegeard",
        classe : "The Warrior Master"
    }
]

console.log(etudiant);
var nombreEtudiant = etudiant.length;
console.log("Le nombre d'étudiant est : " + nombreEtudiant);
document.write("<ul>");
for(let n=0 ; n<nombreEtudiant ; n++) {
    let etudiants = etudiant[n];
    document.write("<li>");
    document.write(etudiants.prenom + " "+ etudiants.nom +" "+ etudiants.classe);
    document.write("</li>");
}

document.write("</ul>");