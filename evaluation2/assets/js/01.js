$(function(){
   $('form').on("submit", function(e) {
        e.preventDefault();
        var chat = $('#selection option:selected');
        var  texte = $('#texte'); 
            
        $("form .has-error").removeClass(".has-error");

        if(chat.val() === $('#selection').get(0)){
            chat.parent().addClass("has-error");
                        
        }
            

        if(texte.val().length < 15) {
            texte.parent().addClass("has-error");
                        
        }
                
            
            
              
    })
    
})