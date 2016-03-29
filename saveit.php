<?php

$filetxt = 'js/list.json';

$current_date = gmDate("Y-m-d\TH:i:s\Z");

$item_id = sprintf('%04X%04X-%04X-%04X-%04X-%04X%04X%04X', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535));

$formdata = array(
	'job'=> $_POST['job'],
	'company'=> $_POST['company'],
	'city'=> $_POST['city'],
	'category'=> $_POST['category'],
	'type'=> $_POST['type'],
	'description'=> $_POST['description'],
	'time'=> $current_date,
	'id'=> $item_id
);

$arr_data = array();  
$jsondata = file_get_contents($filetxt);
$arr_data = json_decode($jsondata, true);
$arr_data[] = $formdata;
$jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

$captcha;
if(isset($_POST['g-recaptcha-response'])){
	$captcha=$_POST['g-recaptcha-response'];
}
if(!$captcha){
	echo ('<h2>Please fill the captcha.</h2>');
	exit;
}
$secretKey = "6LdswxsTAAAAAApgUCIALMCOraDyzXQQnTWh-Tsx";
$ip = $SERVER['REMOTE_ADDR'];
$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
$responseKeys = json_decode($response,true);
if(intval($responseKeys["success"]) !== 1) {
	echo '<h2>You are spammer!</h2>';
} else {
	file_put_contents('js/list.json', $jsondata);
	header("location:.#/");
}

?>