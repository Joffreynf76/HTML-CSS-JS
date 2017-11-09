// Les conditions

var majoriteLegalFr = 18;

/*if(19 >= majoriteLegalFr) {
    alert("Bienvenue");
} else {
    alert("Google ...");
}
*/
// Exercice

function verifAge() {
    let age = parseInt(prompt("Bonjour, quel age avez-vous ?","<saisissez votre age>"));
    if (age >= majoriteLegalFr) {
        alert("Bienvenue");
    } else {
        alert("Vous n'avez pas l'age");
        document.location.href="http://Google.fr";
    }
}

verifAge();

// Les opérateurs de comparaisons

/* L'opérateur de comparaison "==" signifie : egal a.
Il permet de vérifier que 2 variables sont identiques.

"===" signifie strictement egal a. Il va comparer la valeur et le type de donnée.

"!=" signifie différent de
"!==" strictement different de

*/

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

var mail = prompt("Saisissez votre email");
if (mail===email) {
    var motDePasse = prompt("Saisissez votre mot de passe");
} else {
    alert("Email incorrect");
}

if (mail===email & motDePasse===mdp) {
    alert("Bienvenue");
} else {
    alert("Mot de passe incorrect");
}

// Les opérateurs logiques

// L'opérateur ET : && ou AND
// L'opérateur OU : || ou OR
// L'opérateur ! : contraire de 
