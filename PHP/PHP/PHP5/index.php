<?php
include "function.php";
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
   <form method="post" action="calcul.php">
       <label for="longueur">Longueur : </label><input type="text" id="longueur" name="longueur">
       <label for="largeur">Largeur :</label> <input type="text" id="largeur" name="largeur">
       <label for="hauteur">Hauteur :</label><input type="text" name="hauteur">
       <input type="submit" value="Calculer">
    </form>

</body>
</html>