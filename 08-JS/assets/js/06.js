// Les fonctions

// Déclarer une fonction

function ditBonjour() {
    alert("Bonjour !");
}

// Je déclenche la fonction
ditBonjour();

// Déclarer une fonction qui prend une variable en parametre
function Bonjour(Prenom, Nom) {
    document.write("<p>Hello <strong> " + Prenom + " "+ Nom + "</strong> !</p>" );

}

Bonjour("Joffrey", "Lhermitte");

var MonPrenom = "Nathan";
var MonNom    = "Hego";

Bonjour(MonPrenom,MonNom);

// Exercice

function add(nb1, nb2) {
    return nb1 + nb2;
}

document.write("<p>" + add(10,5) + "</p>");

