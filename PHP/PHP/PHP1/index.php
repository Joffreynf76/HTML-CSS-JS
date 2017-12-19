<?php
$titre = "<h1>Titre</h1>";
$message = "<p>Ceci est un message</p>";
$prenom = "Joffrey";
$prenom .= " Lhermitte ";
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
// Commentaire
/*
Commentaire
*/
$toto = "<h1>Coucou</h1>";
echo($titre);
echo($message);
echo("<p>Bonjour \"$prenom\" </p>");
?>   
</body>
</html>

