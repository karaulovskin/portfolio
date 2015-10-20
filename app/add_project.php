<?php
	
	$name = $_POST['projectName'];
	$data = array();

	// $data['mes'] = 'OK';
	if ($name === '') {
		$data['status'] = 'error';
		$data['text'] = 'Заполните это поле!';
	}else{
		$data['status'] = 'OK';
		$data['text'] = 'Вы молодец!';
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>