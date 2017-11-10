// Les selecteurs jQuery

// Format : $("selecteur")


$(function (){
    function l(e) {
        console.log(e);
    }
    // Selectionner les balise span

        //Version JS : 
            l(document.getElementsByTagName("span"));

         // Verssion JQ :
            l($("span"));

    // Sélectionner mon menu

        // Version JS : 
            l(document.getElementById("menu"));

        // Version JQ :
            l($("#menu"));

    // Sélectionner une classe

        // Version JS
            l(document.getElementsByClassName("MaClasse"));

        // Version JQ
            l($("MaClasse"));

    // Sélectionner un attribut

        // En jQuery
            l($("[href='http://google.fr']"));

    

});