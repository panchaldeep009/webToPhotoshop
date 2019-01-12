<?php
    // Set Access Password
    if(isset($_GET['access_pass']) && $_GET['access_pass'] == '<set access password>'){
        include 'connect.php';
        include 'config.php';

        $ps_execute = $pdo->query("SELECT * FROM `tbl_web_ps_execute`");
        $dataArray = array();
        while($row = $ps_execute->fetch(PDO::FETCH_ASSOC)){
            if($row['ps_img_src'] == ""){
                $dataArray[] = $row;
            }
        }
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json;charset=UTF-8');
        echo json_encode($dataArray, JSON_PRETTY_PRINT);
    }
?>