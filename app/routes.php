<?php
$app->get('/', 'PagesController:index')->setName('home');
$app->get('/{something}/', function($request, $response){
	return $this->response->withStatus(200)->withHeader('Location', "/pyry/");
});
$app->get('/{something}', function($request, $response){
	return $this->response->withStatus(200)->withHeader('Location', "/pyry/");
});
$app->get('/{cal}/{level}', 'PagesController:page')->setName('navbar');

?>