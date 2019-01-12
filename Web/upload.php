<?php
    // Set Access Password
    if(isset($_GET['access_pass']) && $_GET['access_pass'] == '<set access password>'){
        include 'connect.php';
        include 'config.php';
        
        $target_Path = "images/";
        $target_Path = $target_Path.basename( $_FILES['img']['name'] );
        move_uploaded_file( $_FILES['img']['tmp_name'], $target_Path );
        $pdo->query("UPDATE `tbl_web_ps_execute` SET `ps_img_src` = '".$target_Path."' WHERE `tbl_web_ps_execute`.`ps_id` = ".$_POST['id']);
        $usr = $pdo->query("SELECT * FROM `tbl_web_ps_execute` WHERE `ps_id` = ".$_POST['id'])
                ->fetch(PDO::FETCH_ASSOC);

        $to = $usr['ps_usr_email'];
        // Set Sender Email Address
        $from = '<set sender email address>';
        $fromName = 'Graphics Generate';
        $subject = 'Your Last Graphics is Ready'; 
        $file = $target_Path;

        $htmlContent = 'Thanks for using service';
        $headers = "From: $fromName"." <".$from.">";
        $semi_rand = md5(time()); 
        $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
        $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
        $message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
        "Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n"; 

        if(!empty($file) > 0){
            if(is_file($file)){
                $message .= "--{$mime_boundary}\n";
                $fp =    @fopen($file,"rb");
                $data =  @fread($fp,filesize($file));

                @fclose($fp);
                $data = chunk_split(base64_encode($data));
                $message .= "Content-Type: application/octet-stream; name=\"".basename($file)."\"\n" . 
                "Content-Description: ".basename($file)."\n" .
                "Content-Disposition: attachment;\n" . " filename=\"".basename($file)."\"; size=".filesize($file).";\n" . 
                "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
            }
        }
        $message .= "--{$mime_boundary}--";
        $returnpath = "-f" . $from;

        $mail = @mail($to, $subject, $message, $headers, $returnpath); 

        echo $mail?"Mail sent":"Mail sending failed";
    }
?>