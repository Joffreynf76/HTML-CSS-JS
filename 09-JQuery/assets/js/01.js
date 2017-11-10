// La disponibilite du dom

/*
A partir du moment où mon dom de ma page est complètement chargé, Je peux
commencer à utiliser jQuery.

Je vais mettre l'ensemble de mon code dans une fonction, cette fonction
sera appelé automatiquement par jQuery lorsque le dom sera entierement
défini.

3 facons de faire : 
*/ 

jQuery(document).ready(function() {

});

// 2ème possibilité

$(document).ready(function() {

});

// 3ème possibilité

$(function (){
    alert("J'ai 20 ans !");
    // En JS :
    document.getElementById("TexteEnJquery").innerHTML = "<strong> Mon texte en JS </stron>";

    // En Jquery :
    $("#TexteEnJquery").html("Mon texte en JQ");

});


// En Jquery les sélecteurs sont les memes qu'en CSS