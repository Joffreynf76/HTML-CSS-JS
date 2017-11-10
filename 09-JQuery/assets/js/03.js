// Le chainage de methode avec jQuery

$(function(){
    // Je souhaite cacher toutes les div de ma page

    //console.log($("div"));
    $("div").hide("slow" , function(){
        alert("fin du hide");

        // La fonction s'executera pour l'ensemble des éléments du sélecteur.

        //-- CSS

        $("div").css("background", "yellow");
        $("div").css("color", "red");

        $("div").show("slow");
    });

    // En utilisant le chainage de méthode, vous pouvez faire s'enchainer plusieurs fonctions les unes apres les autres.

    $("p").hide(1000).css("color","blue").css("font-size","20px").delay(2000).show(500);

    // Mais c'est encore trop long !

    $("p").hide(1000).css({'color' : 'green' , 'font-size' : '20px'}).delay(2000).show(500);
});