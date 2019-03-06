<?php
	require "../../config.php";

	use app\models\Feed;
	
	$feed = new Feed;

	$nome = $_POST["nomeInput"];
	$feed_content = $_POST["feedInput"];

	if (isset($nome) && isset($feed_content)) {
		$feed->setFeed($nome, $feed_content);	
	}	

?>