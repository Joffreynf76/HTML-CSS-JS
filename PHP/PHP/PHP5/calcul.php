<?php 
include "function.php";
$longueur = $_POST["longueur"];
$largeur = $_POST["largeur"];
$hauteur = $_POST["hauteur"];

if(calculerVolume($longueur,$largeur,$hauteur)){
    echo("Le volume est de : " . calculerVolume($longueur,$largeur,$hauteur));
}
