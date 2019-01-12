<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Harry Potter Style Name Generate</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="js/main.js"></script>
</head>
<body>
    <?php
        include 'FB_connect/req.php';
        if (!session_id()) {
            session_start();
        }
        if(isset($_SESSION['fb_access_token'])){
            $url = "https://graph.facebook.com/v3.2/me?fields=id,name,email&access_token=".$_SESSION['fb_access_token']."";
            $headers = get_headers($url, 1);
            if ($headers[0] == 'HTTP/1.1 200 OK') {
                $json = file_get_contents($url);
                if(isset($json)){
                    $obj = json_decode($json);
                    if(isset($obj->error)){
                        echo 'error : '.$obj->error->message;
                    } else {
                        include 'connect.php';
                        include 'config.php';
                        resetData:
                        $usr = $pdo->query("SELECT * FROM `tbl_web_ps_execute` WHERE `ps_usr_data` = '".$obj->id."'")
                                ->fetch(PDO::FETCH_ASSOC);
                        if($usr == null){
                            $pdo->query("INSERT INTO `tbl_web_ps_execute` (`ps_name`, `ps_data`, `ps_usr_data`, `ps_usr_email`, `ps_img_src`) 
                                            VALUES ('hp', '".$obj->name."', '".$obj->id."', '".$obj->email."', '')");
                            goto resetData;
                        }
                        if($usr['ps_img_src'] == ''){
                            echo "You Graphic is Under Process, wait for while or come back again";
                            ?>
                            <input id="fb_id" type="hidden" value="<?php echo $obj->id; ?>"/>
                            <script>runWait();</script>
                            <?php
                        } else {
                            header("Location: ".$usr['ps_img_src']);
                            die();
                        }
                    }
                }
            } else {
                echo $headers[0]." : ".$headers["WWW-Authenticate"];
            }
        } else {
            fbLogin();
        } ?>
</body>
</html>