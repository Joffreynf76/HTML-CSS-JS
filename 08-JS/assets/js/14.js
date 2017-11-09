// Les evenements

/*
Les evenements vont me permettre de déclencher une fonction,
suite à une action de mon utilisateur.

Les evenements : mouse 
    click;
    mouseenter;
    mouseleave;

Les evenements : keyboard
    keydown;
    keyup;

Les evenements : window
    scroll;
    resize;

Les evenements : form
    change : pour les elements <input>, <select>, <textarea>
    submit : à l'envoi d'un formulaire

Les evenements : document
    DOMContentloaded; 
*/

// Les ecouteurs d'evenements

/*
Pour attacher un evenement à un element, pour déclarer un ecouteur
d'evenement : 
*/

var p = document.getElementById("monParagraphe");

function changeColor() {
    p.style.color = "red";
}

p.addEventListener("click", changeColor);

// Exercice

var input = document.createElement("input");
input.setAttribute("type", "text");
input.id = "monInput";
document.body.appendChild(input);

function voirSaisie() {
    alert(input.value); 
}

input.addEventListener("change", voirSaisie);