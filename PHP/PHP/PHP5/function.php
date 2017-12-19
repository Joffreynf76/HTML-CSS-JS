<?php

function calculerVolume($longueur,$largeur,$hauteur){
    if ($longueur>0 && $largeur >0 && $hauteur>0){
        return $longueur*$largeur*$hauteur;
    }
    return false;
}