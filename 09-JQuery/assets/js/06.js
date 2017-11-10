// Les sélecteurs d'enfants en jQuery

$(function(){
    function l(e) {
        console.log(e);
    }

    // Je souhaite sélectionner toutes mes div
    l($("div"));

    // Je souhaite maintenant sélectionner mon menu
    l($("nav"));

    // Je souhaite tous les éléments descendants direct qui sont dans le menu
    l($("nav").children());

    // Je souhaite uniquement les éléments ul
    l($("nav").children("ul"));

    // Je souhaite récupérer tous les éléments li de mon ul
    l($("nav").children("ul").find("li"));

    // Je souhaite récupérer uniquement le 2eme élément de mes li
    l($("nav").children("ul").find("li").eq(1));

    // Je souhaite conaitre le voisin immediat de mon menu
    l($("nav").next());
    l($("nav").prev());

    // Les parents
    l($("nav").parent());
});