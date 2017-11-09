//alert("WOW ! Tu es sur ma page !");

// Deux slash pour faire un commentaire uniligne

/* Içi, je peux faire un commentaire
   sur plusieurs lignes

   raccourci : ctrl + / ou ctrl + shift + /
*/

// -- 1 : Déclarer une variable JS
var Prenom;

// -- 2 : Affecter une valeur
Prenom = "Joffrey";

// -- 3 : Afficher la valeur de ma variable dans la console.
console.log(Prenom);

// Les types de variables 

// Içi, typeof me permet de connaitre le type de ma variable
console.log(typeof Prenom);

// Déclaration et affectation d'une valeur à une variable
var Age = 19;

// Afficher dans la console
console.log(Age);

// Vérifier son type
console.log(typeof Age);

/* La portée des variables

Les variables déclarer directement à la racine du fichier sont appelées variables "globales".

Elles sont disponibles dans l'ensemble de votre document y compris dans les fonctions / boucles.

La portée des variables globales s'arretent au fichier. Si je change de page, les variables n'existe plus !

Les variables déclarées à l'intérieur d'une fonction sont appelées variables "locales".

Elles sont disponibles uniquement à l'intérieur de celle-ci.

*/

// Les variables float 

var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// Les booléens (VRAI / FAUX)

var unBooleen = false; // true
console.log(unBooleen);
console.log(typeof unBooleen);

// Les constantes

/*
La déclaration CONST permet de créer une constante accessible uniquement en lecture.

Sa valeur ne pourra pas être modifiée par des réaffectation ultérieures.

Une constante ne peut pas être déclarée à nouveau.

Généralement par convention, les constantes sont en MAJUSCULES.

*/ 

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

// La minute info

/*
Au fur et à mesure que l'on affecte ou réaffecte des valeurs à une variables,
celle-ci prend la nouvelle valeur et le nouveau type !

En Javascript (ECMA Script), les variables sont auto-typées.

Pour convertir une variable de type number en string et string en number je peux utiliser
les fonctions natives de javascript

*/

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// Je ré-affecte une valeur à ma variable

unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// Conversion d'un nombre en string avec toString()

var unNombreQuiDevientString = 10;
console.log(unNombreQuiDevientString.toString());
console.log(unNombreQuiDevientString);
