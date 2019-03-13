<?php
	
	namespace app\models;

	class Feed extends Model {
		protected $table = "feeds";

		public function create($nome, $feed) {
			$sql = "INSERT INTO {$this->table} (nome, feed) values (:nome, :feed)";
			$create = $this->connection->prepare($sql);
			
			$create->bindValue(':nome', $nome);
			$create->bindValue(':feed', $feed);

			$create->execute();

			return $this->connection->lastInsertId();
		}	
	}
	
?>