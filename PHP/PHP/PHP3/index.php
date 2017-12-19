<?php
$valeur =  mt_rand();
$message ="<p>Multiple de ";
echo ("<p>La valeur est : $valeur </p>");
for($i = 1 ; $i <= 10 ; $i++){
    if($valeur % $i == 0){
        $message .=  $i . " ";
    }
}
$message .= " </p>";
echo($message);

