// Le Dom

/* Le dom est une interface de développement en js pour html.
Grace au dom, je vais etre en mesure d'accéder / modifier mon html.

L'objet document : c'est le point d'entré vers mon contenu html !

Chaque page chargée dans mon navigateur à un objet document.

*/

// Comment puis-je faire pour récupérer les différentes informations de ma page html ?

// document.getElementById()

/* C'est une fonction qui va permettre de récupérer un élément html à partir de
son identifiant unique : ID 

*/

var bonjour = document.getElementById("bonjour");
console.log(bonjour);

// document.getElementsByClassName()

/* C'est une fonction qui va permettre de récupérer un ou plusieurs élément html à partir de
leur classe

*/

var contenu = document.getElementsByClassName("contenu");
console.log(contenu);

// Me renvoi un tableau js avec mes éléments html.

// document.getElementsByTagName()

var span = document.getElementsByTagName("span");
console.log(span);


