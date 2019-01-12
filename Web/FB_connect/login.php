<?php
if (!session_id()) {
    session_start();
}
include 'config.php';

if(!isset($_SESSION['fb_access_token']) && isset($_GET['backURL'])){
    require_once 'fb-sdk/src/Facebook/autoload.php';
    $fb = new Facebook\Facebook([
      'app_id' => $fb_config['app'],
      'app_secret' => $fb_config['secret'],
      'default_graph_version' => 'v2.2',
    ]);
    
    $helper = $fb->getRedirectLoginHelper();
    $permissions = ['email'];

    $url = $_SERVER['REQUEST_URI'];
    $parts = explode('/',$url);
    $dir = 'https://'.$_SERVER['SERVER_NAME'];
    for ($i = 0; $i < count($parts) - 1; $i++) {
        $dir .= $parts[$i] . "/";
    }
    $_SESSION['fb_callBackURL'] = $_GET['backURL'];
    $loginUrl = $helper->getLoginUrl($dir.'callBack.php', $permissions);
    header("Location: ".$loginUrl);
    die();
}
?>