<?php

	namespace app\models;

	/**
	 * Modulo de conexao com o driver
	 */

	abstract class Model {
		
		private $connection;

		public function __construct() {
			$this->connection = Connection::connect();
		}

		public function getFeeds() {
			$sql = "SELECT * FROM {$this->table}";

			$allFeeds = $this->connection->prepare($sql);
			$allFeeds->execute();

			return $allFeeds->fetchAll();
		}

		public function setFeed($this->name, $this->feed_content) {
			$sql_insert = "INSERT INTO feeds (id, nome, feed) VALUES (DEFAULT, '$name', '$feed_content')";

			$set = $this->connection->prepare($sql_insert);
			$set->execute();

		}
		
	}
?>