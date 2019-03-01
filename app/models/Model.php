<?php

	namespace app\models;

	/**
	 * Modulo para conectar o Front com o Back
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
		
	}
?>