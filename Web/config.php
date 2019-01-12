<?php
    
    include 'connect.php';
    try{
        /// Create Tables for portfolio
        $pdo->query("CREATE TABLE IF NOT EXISTS `tbl_web_ps_execute` ( 
            `ps_id` INT(255) NOT NULL AUTO_INCREMENT , 
            `ps_name` VARCHAR(255) NOT NULL ,
            `ps_data` VARCHAR(255) NOT NULL ,
            `ps_usr_data` VARCHAR(255) NOT NULL ,
            `ps_img_src` VARCHAR(255) NOT NULL ,
            PRIMARY KEY (`ps_id`)) CHARACTER SET utf8 COLLATE utf8_general_ci");
    } catch(PDOException $exception){
        echo 'Error'.$exception->getMessage();
        exit();
    }
?>