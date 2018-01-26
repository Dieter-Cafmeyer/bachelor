<?php
require_once WWW_ROOT . 'controller' . DS . './Controller.php';
require_once WWW_ROOT . 'dao' . DS . 'HomeDAO.php';

class HomeController extends Controller {

	private $homeDAO;

	function __construct() {
    	$this->homeDAO = new HomeDAO();
	}

	public function index() {
    /* CODE VOOR HOME */
	}
}


