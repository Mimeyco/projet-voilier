<?php
header('Content-Type: application/json');
ob_start();
$newsarray = [
 "email" => "",
 "emailError" => "", 
 "isNewsletterSuccess" => false,
 "debuggage"=> "RAS"];
$emailTo = "contact@fabienautourdumonde.fr";
if ($_SERVER["REQUEST_METHOD"]=="POST")
{
    $newsarray["email"]=verifyInput($_POST['email']);
    $newsarray["isNewsletterSuccess"] = true;
    $emailText = "";
    if(!isEmail($newsarray["email"]))
    {
        $newsarray["emailError"]= "Renseignez un email valide svp";
        $newsarray["isNewsletterSuccess"] = false;
    }
    else
    {
        $emailText .= "E-mail : {$newsarray["email"]}\n";
        $newsarray["debuggage"]="Je suis dans la boucle";
        
        // Appel à la fonction sendemail avant l'envoi de la réponse JSON
        if (!sendemail($emailTo, $emailText, "Demande d'inscription à la newsletter")) {
            $newsarray["emailError"] = "L'envoi de l'email a échoué.";
            $newsarray["isNewsletterSuccess"] = false;
        }
    }
    
    // Envoi de la réponse JSON après toutes les opérations
    ob_end_clean();
    echo json_encode($newsarray);
}

    function isEmail($var)
    {
        return filter_var($var, FILTER_VALIDATE_EMAIL);
    }

    function verifyInput($var)
    {
        $var = trim($var);
        $var = stripslashes($var);
        $var = htmlspecialchars($var);
        return $var;
    }
    function sendemail($emailToSend, $emailText, $headears){
        return mail($emailToSend, "Personne souhaitant s'inscrire à la newsletter", $emailText,$headers);
    }

?>

