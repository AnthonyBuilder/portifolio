<?php
	require "../../config.php";

	use app\models\Feed;

	$feed = new Feed;

	$nomeIn = filter_input(INPUT_POST, 'nomeInput', FILTER_SANITIZE_STRING);
	$feedIn = filter_input(INPUT_POST, 'feedInput', FILTER_SANITIZE_STRING);
	
	$created = $feed->create($nomeIn, $feedIn);

	if ($created) {
		echo "Feed postado";
	} else {
		echo "não foi possivel postar o feed";
	}
?>