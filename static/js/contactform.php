<?php
if($_POST['fromform'] == "yes") {
    if($_POST['url'] != "") {
        exit();
    }
    elseif($_POST['url'] == "") {
        //this would be a good spot for some server-side validation
        function compose() {
            $labels = array("thename",
                "theemail",
                "thephone",
                "thewebsite",
                "themessage");
            $fields = array_values($_POST); //convert $_POST to an array I can use
            $counter = 0;
            $string = "You have a new message from the Contact Form on ajy.co:<br /><br />";
            while($counter <= 4) {
                $newfields = strip_tags($fields[$counter]);
                $string = $string."<strong>".$labels[$counter].":</strong> ".$newfields."<br />";
                $counter = $counter + 1;
            }
            $string = stripslashes($string);
            return $string;
        }
        
        //compose the email
        $mess = compose();
        $to = "aaronjamesyoung@gmail.com";
        $subj = "Website Message from AJY.co";
        // To send HTML mail, the Content-type header must be set
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= "From: ".$_POST['theemail'];
        mail($to, $subj, $mess, $headers); //send the email
    }
}

?>
