// -- Initialisation de jQuery (DOM READY)
$(function() {
    
        // -- Déclaration de Variables
        var CollectionDeContacts = [];
    
        /* --------------------------------------------------------------
                            DECLARATION DES FONCTIONS
        -------------------------------------------------------------- */
    
        // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
        function ajouterContact(UnContact) {
            
            CollectionDeContacts.push(UnContact);
            console.log(CollectionDeContacts);
            $(".aucuncontact").hide();
            $(`<tr>
            <td>${UnContact.nom}</td>
            <td>${UnContact.prenom}</td>
            <td>${UnContact.email}</td>
            <td>${UnContact.tel}</td>
            </tr>
            `).appendTo($("#LesContacts").find("tbody"));
            reinitialisationDuFormulaire();
            afficheUneNotification();
        }
    
        // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
        function reinitialisationDuFormulaire() {
            $("#contact").get(0).reset();
           
        }
         
    
        
    
        // -- Affichage d'une Notification
        function afficheUneNotification() {
            $(".alert-contact").fadeIn().delay(3000).fadeOut();
            
        }
    
        // -- Vérification de la présence d'un Contact dans Contacts
        function estCeQunContactEstPresent(UnEmail) {
            let estPresent = false;
            for (let i=0 ; i< CollectionDeContacts.length ; i++){
                if (UnEmail === CollectionDeContacts[i].email){
                    estPresent=true;
                    break;
                }
            }
            return estPresent;
        }
    
        // -- Vérification de la validité d'un Email
        // : https://paulund.co.uk/regular-expression-to-validate-email-address
        function validateEmail(email){
            var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            var valid = emailReg.test(email);
    
            if(!valid) {
                return false;
            } else {
                return true;
            }
        }
    
        /* --------------------------------------------------------------
                        TRAITEMENT DE MON FORMULAIRE
        -------------------------------------------------------------- */
    
        // -- Détection de la soumission de mon Formulaire
        $('#contact').on('submit', function(e) {
    
            // -- Voir le contenu de l'évènement
            console.log(e);
    
            // -- Stopper la redirection de la page
            e.preventDefault();
    
            // -- Récupération des champs à vérifier
            var nom,prenom,email,tel
            nom = $("#nom");
            prenom = $("#prenom");
            email = $("#email");
            tel = $("#tel");
    
            // -- Vérification des informations...
            let mesInformationsSontValides = true;
            if(nom.val().length==0 ) {
                mesInformationsSontValides = false;

            }
            if(prenom.val().length==0 ) {
                mesInformationsSontValides = false;

            }
            if(tel.val().length==0 ) {
                mesInformationsSontValides = false;

            }
            if(!validateEmail(email.val())){
                mesInformationsSontValides = false;
            }

            if(mesInformationsSontValides){
                let Contact = {
                    nom : nom.val(),
                    prenom : prenom.val(),
                    email : email.val(),
                    tel : tel.val()
                };
                console.log(Contact);
                if(!estCeQunContactEstPresent(email.val())){
                    ajouterContact(Contact);

                } else {
                    alert("Contact deja présent");
                    reinitialisationDuFormulaire();
                }


            } else {
                alert("Erreur !!");

            }
            
            // -- ajouterContact si tous est correct.
            
            // -- Alert si erreur dans l'un des champs
    
        });
    
    }); // -- Fin de jQuery READY !