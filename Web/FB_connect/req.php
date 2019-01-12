<?php
    function fbLogin(){
        $current_link = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        header("Location: https://deep-panchal.com/webToPS/FB_connect/login.php?backURL=".urlencode($current_link));
        die();
    }
?>