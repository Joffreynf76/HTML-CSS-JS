<?php
$nom = $_POST['nom'] ;
$prenom = $_POST['prenom'] ;
$message = $_POST['message'];
$email=$_POST['email'];



 
echo("<h3>Merci pour votre message</h3><br>\n");
echo( "Votre nom : <p>".$nom."</p><br>\n" ) ;
echo( "Votre prénom : <p>".$prenom."</p><br>\n" ) ;
echo ("Votre message : <p>".$message."</p><br>\n");

?>