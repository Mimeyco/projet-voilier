<?php
    $array = ["fistname" => "",
     "name" => "",
     "email" => "",
     "phone" => "",
     "message" => "",
     "firstnameError" => "",
     "nameError" => "",
     "emailError" => "",
     "phoneError" => "",
     "messageError" => "", 
     "isSuccess" => false];
    $emailTo = "loghan.meynaud@gmail.com";
    if ($_SERVER["REQUEST_METHOD"]=="POST")
    {
        $array["firstname"]= verifyInput($_POST['firstname']);
        $array["name"]= verifyInput($_POST['name']);
        $array["email"]=verifyInput($_POST['email']);
        $array["phone"]=verifyInput($_POST['phone']);
        $array["message"]=verifyInput($_POST['message']);
        $array["isSuccess"] = true;
        $emailText = "";

        if(empty($array["firstname"]))
        {
            $array["firstnameError"] = "Renseignez votre prénom svp";
            $array["isSuccess"] = false;
        }
        else
            $emailText .= "Prénom : {$array["firstname"]}\n";
        
        if(empty($array["name"]))
        {
            $array["nameError"] = "Renseignez votre nom svp";
            $array["isSuccess"] = false;
        }
        else
            $emailText .= "Nom : {$array["name"]}\n";

        if(!isEmail($array["email"]))
        {
            $array["emailError"]= "Renseignez un email valide svp";
            $array["isSuccess"] = false;
        }
        else
            $emailText .= "E-mail : {$array["email"]}\n";

        if(!isPhone($array["phone"]))
        {
            $array["phoneError"]= "Renseignez un numéro de téléphone valide svp";
            $array["isSuccess"] = false;
        }
        else
            $emailText .= "Téléphone : {$array["phone"]}\n";
        if(empty($array["message"]))
        {
            $array["messageError"]= "Quel est votre message ?";
            $array["isSuccess"] = false;
        }
        else
            $emailText .= "Message : {$array["message"]}\n";
        if($array["isSuccess"])
        {
            $headers = "From : {$array["firstname"]} {$array["name"]} <{$array["email"]}>\r\nReply-To: {$array["email"]}";
            mail($emailTo, "Message", $emailText, $headers);
        }
        echo json_encode($array);
    }


    function isPhone($var)
    {
        return preg_match("/^[0-9 ]*$/", $var);
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
