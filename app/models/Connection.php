<?php
	namespace app\models;

	/**
	 * Classe de conexao com o servidor
	 */

	use PDO;

	class Connection {
		function connect() {
			$pdo = new PDO("mysql:host=localhost:3307;dbname=feedbackdb", "root", "root");
			$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

			return $pdo;
		}
	}

?>