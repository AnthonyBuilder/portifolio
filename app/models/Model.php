<?php

	namespace app\models;

	/**
	 * Modulo de conexao com o driver
	 */

	abstract class Model {
		
		protected $connection;

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