<?php

namespace App\Controllers;
use Slim\Views\Twig as View;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\Database;

class PagesController extends Controller
{

	public function index($request, $response)
	{
		$cal_array = ['plus', 'minus', 'multiply', 'division'];
		return $this->view->render($response, 'home.twig', [
			'cal_array' => $cal_array
		]);
	}
	public function page($request, $response)
	{
		$level = $request->getAttribute("level");
		$cal = $request->getAttribute("cal");
		if($cal == "plus" || $cal == "minus" || $cal == "multiply" || $cal == "division") 
		{
			if($level == "easy" || $level == "medium" || $level == "hard") {
				return $this->view->render($response, 'page.twig', [
					'level' => $level,
					'cal' => $cal
				]);
			}
		}else{
			return $response->withRedirect('/pyry');
		}
	}

}

?>