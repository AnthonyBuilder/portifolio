<?php

	namespace app\models;

	/**
<<<<<<< HEAD
	 * Modulo de conexao com o driver
=======
	 * Modulo para conectar o Front com o Back
>>>>>>> 3ee331f021c84c80d11e701992141944516c5fd0
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
<<<<<<< HEAD

		public function setFeed($this->name, $this->feed_content) {
			$sql_insert = "INSERT INTO feeds (id, nome, feed) VALUES (DEFAULT, '$name', '$feed_content')";

			$set = $this->connection->prepare($sql_insert);
			$set->execute();

		}
=======
>>>>>>> 3ee331f021c84c80d11e701992141944516c5fd0
		
	}
?>