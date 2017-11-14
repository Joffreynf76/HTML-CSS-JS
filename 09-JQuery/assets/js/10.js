
$(function(){
    
    var membres = [
        {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
        {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
        {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
        {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
      ];

      // Variables 
      nombresDeMembres = membres.length;

      // Récupérations des éléments
      var pseudo = $("#pseudo");
      var age = $("#age");
      var email = $("#email");
      var mdp = $("#mdp");
      var bienvenue = $("#Bienvenue");
      var form = $("form");
      var pseudoError = $('.pseudoError');
      var ageError = $(".ageError");
      var submit = $("#submit");

    // Etape 1 et 3

    pseudo.on("input",function(e){
        
        for(let i=0 ; i<nombresDeMembres ; i++){
            if(pseudo.val() === membres[i].pseudo ){
                pseudoError.fadeIn();
                submit.attr("disabled",true);
                break;
            } else {
                pseudoError.fadeOut();
                submit.removeAttr("disabled");
                bienvenue.text(pseudo.val());
            }
        }

    })
    // Etape 2
    var ageLegal = 18;
    age.on("change", function(a){
        if(age.val()<ageLegal){
            ageError.fadeIn();
            submit.attr("disabled",true);
        } else {
            ageError.fadeOut();
            submit.removeAttr("disabled");
        }
    });
       
    // Etape 4
    // A
    
    form.on("submit", function(b){
        b.preventDefault();
        let Contact = {
            pseudo : pseudo.val(),
            age : age.val(),
            email : email.val(),
            mdp : mdp.val()
        }
        membres.push(Contact);
        nombresDeMembres = membres.length;

        for(let n=0 ; n<nombresDeMembres ; n++){
            
            $(`<ul><li>${membres[n].pseudo} : ${membres[n].age} ans</li></ul>`).appendTo($("body"));
        }
        
        
        
    })
    
        
        
    });

















