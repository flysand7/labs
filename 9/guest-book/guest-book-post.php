<?php

function get_user_browser(){
  $fullUserBrowser = (!empty($_SERVER['HTTP_USER_AGENT'])? 
  $_SERVER['HTTP_USER_AGENT']:getenv('HTTP_USER_AGENT'));
  $userBrowser = explode(')', $fullUserBrowser);
  $userBrowser = $userBrowser[count($userBrowser)-1];
  if((!$userBrowser || $userBrowser === '' || $userBrowser === ' ' || strpos($userBrowser, 'like Gecko') === 1) && strpos($fullUserBrowser, 'Windows') !== false){
    return 'Internet-Explorer';
  }else if((strpos($userBrowser, 'Edge/') !== false || strpos($userBrowser, 'Edg/') !== false) && strpos($fullUserBrowser, 'Windows') !== false){
    return 'Microsoft-Edge';
  }else if(strpos($userBrowser, 'Chrome/') === 1 || strpos($userBrowser, 'CriOS/') === 1){
    return 'Google-Chrome';
  }else if(strpos($userBrowser, 'Firefox/') !== false || strpos($userBrowser, 'FxiOS/') !== false){
    return 'Mozilla-Firefox';
  }else if(strpos($userBrowser, 'Safari/') !== false && strpos($fullUserBrowser, 'Mac') !== false){
    return 'Safari';
  }else if(strpos($userBrowser, 'OPR/') !== false && strpos($fullUserBrowser, 'Opera Mini') !== false){
    return 'Opera-Mini';
  }else if(strpos($userBrowser, 'OPR/') !== false){
    return 'Opera';
  }
  return false;
}



$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$url = null;
if(array_key_exists('url', $_POST)) {
    $url = htmlspecialchars($_POST['url']);
}
$text = htmlspecialchars($_POST['message']);
$ip = $_SERVER['REMOTE_ADDR'];
$browser = get_user_browser();

$date = date("Y-m-d h:i:s");
echo $date . '<br>';

$mysqli = new mysqli('localhost', 'root', '', 'guest_book');
if(!$mysqli) {
     die('Failed to connect to database');
}
$query = "INSERT INTO book9 (name, email, url, message, date, browser) VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $mysqli->prepare($query);
$stmt->bind_param('ssssss', $name, $email, $url, $text, $date, $browser);
$stmt->execute();
$result = $stmt->get_result();
if(!$result) {
    echo "Error: " . $query . "<br>" . $mysqli->error;
}
$mysqli->close();

header('Location: /guest-log.php');
die();


?>