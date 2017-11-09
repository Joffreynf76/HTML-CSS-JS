/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var PremierTrimestre = [
    {
        nom       :   "LIEGEARD",
        prenom    :   "Hugo",
        moyenne   :   {
                            francais : 4,
                            math     : 8,
                            physique : 18
                        }
    },
    {
        nom       :   "MANAS",
        prenom    :   "Tanguy",
        moyenne   :   {
                            francais : 6,
                            math     : 15,
                            physique : 9,
                            anglais  : 15.5
                        }
    },
    {
        nom       :   "ARAUJO",
        prenom    :   "Thiago",
        moyenne   :   {
                            francais : 10,
                            math     : 15,
                            physique : 16
                        }
    }
];

// Petite fonction de raccourci

function w(t) {
    document.write(t);
}

function l(e) {
    console.log(e);
}

l(PremierTrimestre);

// Je souhaite afficher la liste de mes étudiants
w("<ol>");
for(let i=0 ; i < PremierTrimestre.length ; i++) {
    let etudiant = PremierTrimestre[i];
    l(etudiant);
    var nombreMatiere = 0;
    var sommeDesNotes = 0;
    w("<li>");
    w(etudiant.prenom +" " + etudiant.nom + " ");
    w("<ul>");
        for (let matiere in etudiant.moyenne) {
            l(matiere);
            l(etudiant.moyenne[matiere]);
            nombreMatiere++;
            sommeDesNotes += etudiant.moyenne[matiere];
        w("<li>");
            w(matiere + " : " + etudiant.moyenne[matiere]);
        w("</li>");
    }
    w("<li>");
        w("Moyenne générale : " + (sommeDesNotes/nombreMatiere).toFixed(2));
    w("</li>");    
    w("</ul>");
    w("</li>");
}

w("</ol>");