/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

// 1 -- Initialisation des variables
var dateObj = new Date();
var anneeActuelle = dateObj.getFullYear();

// 2 -- Création de ma fonction
function hello() {

    // 2a -- Je demande à l'utilisateur son prénom
    let prenom = prompt("Hello ! What is your name ?","<saisir votre prénom>");
    // 2b -- Je lui demande son age
    let age = parseInt(prompt("Hello " + prenom + " ! How old are you ?","<saisir votre age>"));
    // 2c -- J'affiche une alert avec son année de naissance
    alert("AMAZING ! So you were born in " + (anneeActuelle-age)+ " !");
    // 2d -- Affichage dans ma page HTML
    document.write("Hello " + prenom + " it's amazing ! you're " + age + " years old !");
}

// 3 -- Execution de ma fonction
hello();
