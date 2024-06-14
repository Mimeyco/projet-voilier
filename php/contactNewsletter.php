<?php
    $array = [
     "email" => "",
     "emailError" => "", 
     "isSuccess" => false];
    $emailTo = "loghan.meynaud@gmail.com";
    if ($_SERVER["REQUEST_METHOD"]=="POST")
    {
        $array["email"]=verifyInput($_POST['email']);
        $array["isSuccess"] = true;
        $emailText = "";

        if(!isEmail($array["email"]))
        {
            $array["emailError"]= "Renseignez un email valide svp";
            $array["isSuccess"] = false;
        }
        else
            $emailText .= "E-mail : {$array["email"]}\n";

        if($array["isSuccess"])
        {
            mail($emailTo, "Personne souhaitant s'inscrire à la newsletter", $emailText);
        }
        echo json_encode($array);
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

?>
