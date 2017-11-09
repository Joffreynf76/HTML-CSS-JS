// Déclarer un tableau numérique
var monTableau = [];
var myArray = new Array;

// Affecter des valeurs à un tableau numérique
monTableau[0] = "Hugo";
monTableau[1] = "Nathan";
monTableau[2] = "Lou";

// Afficher le contenu de mon tableau dans la console
console.log(monTableau[0]);
console.log(monTableau[1]);
console.log(monTableau[2]);

// Déclarer et affecter des valeurs à un tableau numérique
var NosPrenoms = ["Emilie","Hocine","Terry","Benjamin","Hugo"];
console.log(NosPrenoms);
console.log(typeof NosPrenoms);

// Déclarer et affecter des valeurs à un objet

var coordonnee = {
    prenom : "Hugo",
    nom : "Liegeard",
    age : 27
};

console.log(coordonnee);
console.log(typeof coordonnee);

// Je vais créer 2 tableaux numériques
var listePrenoms = ["Hugo","Rodrigue","Benjamin"];
var listeDeNoms  = ["Liegeard","Nouel","Jourand"];

// Je vais créer un tableau à 2 dimensions à partir de mes 2 tableaux précédents
var Annuaire = [listePrenoms, listeDeNoms];
console.log(Annuaire);

// Afficher sur ma page le nom et prénom de Rodrigue
document.write(Annuaire[0][1]);
document.write(" ");
document.write(Annuaire[1][1]);

// Exercice

var AnnuaireDesStagiaires = [
    {prenom: "Hugo", nom: "Liegeard", tel: "XX XX XX XX XX"},
    {prenom: "Benjamin", nom: "Jourand", tel: "XX XX XX XX XX"},
    {prenom: "Hocine", nom: "Alili", tel: "XX XX XX XX XX"}
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0].prenom);


// Ajouter un élément

var Couleurs = ["Rouge","Jaune","vert"];

// Si je souhaite ajouter un élément dans mon tableau
// Je fait appel à la fonction push() qui me renvoi le nombre d'éléments de mon tableau

console.log(Couleurs);
var nombreElementDeMonTableauCouleurs = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementDeMonTableauCouleurs);

// La fonction unshift() permet d'ajouter un ou plusieurs elements en debut de tableau.

// Récuperer et sortir le dernier élément

// La fonction pop() me permet de supprimer le dernier élément de mon tableau et d'en récupérer la valeur.

var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);

//shift() pour le premier element

// splice() permet de faire sortir un ou plusieurs éléments de votre tableau

