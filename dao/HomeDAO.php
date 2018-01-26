<?php
require_once __DIR__ . '/DAO.php';

class HomeDAO extends DAO {

	public function selectAll(){
		$sql = "SELECT * FROM `contact_tbl`";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function selectById($id){
		$sql = "SELECT * FROM `contact_tbl` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function selectByEmail($email){
		$sql = "SELECT * FROM `newsletter_tbl` WHERE `email` = :email";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':email', $email);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function insert($data){
		$sql = "INSERT INTO `contact_tbl` (`name` , `email`, `location`, `message`) VALUES (:name, :email, :location, :message)";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':name', $data['name']);
		$stmt->bindValue(':email', $data['email']);
      	$stmt->bindValue(':location', $data['location']);
      	$stmt->bindValue(':message', $data['message']);
		return $stmt->execute();
	}

	public function getValidationErrors($data) {
		$errors = array();
		if(empty($data['email'])) {
			$errors['email'] = 'Please enter your email';
		}
		if(empty($data['name'])) {
			$errors['name'] = 'Please enter your name';
		}

		return $errors;
	}

}
