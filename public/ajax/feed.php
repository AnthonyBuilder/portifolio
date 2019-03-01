<?php
	require "../../config.php";

	use app\models\Feed;

	$feed = new Feed;

	//var_dump($feed->getFeeds());
	echo json_encode($feed->getFeeds());
?>