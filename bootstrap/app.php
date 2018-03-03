<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$app = new \Slim\App([
    'settings' => [
        'determineRouteBeforeAppMiddleware' => false,
        'displayErrorDetails' => true
    ],
]);
// Get container
$container = $app->getContainer();

$container['view'] = function ($container) {
    $view = new \Slim\Views\Twig(__DIR__ . '/../views', [
        'cache' => false
    ]);
    // Instantiate and add Slim specific extension
    $basePath = rtrim(str_ireplace('index.php', '', $container['request']->getUri()->getBasePath()), '/');
    $view->addExtension(new Slim\Views\TwigExtension(
        $container->router, 
        $container->request->getUri()
    ));

    return $view;
};

$container['PagesController'] = function($container){
    return new \App\Controllers\PagesController($container);
};

?>