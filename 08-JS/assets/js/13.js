// La manipulation des contenus

function l(e) {
    console.log(e);
}

// Je souhaite récupérer mon lien ; comment procéder ?

var google = document.getElementById("google");
l(google);

// Maintenant je souhaite accéder aux informations de ce lien

// A : le lien vers lequel pointe la balise
l("Le lien vers lequel pointe la balise : ");
l(google.href);

// B : l'id de la balise
l("L'ID est : ");
l(google.id);

// C : la classe de la balise
l("La classe est : ");
l(google.className);

// D : le texte de la balise
l("Le texte : ");
l(google.textContent);

// Modifier le contenu de mon lien
google.textContent = "Mon lien vers Google !";

// Ajouter un élément dans ma page

// Nous allons utiliser 2 méthodes : 

// 1 document.createElement()
// Définition de l'élément

var span = document.createElement("span");
span.id= "monSpan";
span.textContent= "Mon beau texte en js";

// La fonction appendChild() va permettre de rajouter un enfant à un élément du DOM.
google.appendChild(span);

/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : "Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.

BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */
var body = document.body;
var h1 = document.createElement("h1");
var a = document.createElement("a");
a.textContent = "Titre de mon article";
a.href = "https://campus-saint-marc.com/";

h1.appendChild(a);
body.appendChild(h1);

a.style.color= "red";
a.style.textDecoration = "none";


