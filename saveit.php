<?php

$filetxt = 'js/list.json';

$formdata = array(
	'job'=> $_POST['job'],
	'company'=> $_POST['company'],
	'city'=> $_POST['city'],
	'category'=> $_POST['category'],
	'type'=> $_POST['type'],
	'description'=> $_POST['description']		
);

$arr_data = array();  
$jsondata = file_get_contents($filetxt);
$arr_data = json_decode($jsondata, true);
$arr_data[] = $formdata;
$jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
file_put_contents('js/list.json', $jsondata);

header("location:index.html");
	
?>