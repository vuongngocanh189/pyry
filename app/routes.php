<?php
$app->get('/', 'PagesController:index')->setName('home');
$app->get('/{cal}/{level}', 'PagesController:page')->setName('navbar');

?>