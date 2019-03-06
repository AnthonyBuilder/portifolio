<?php
	namespace app\models;

	/**
	 * Classe de conexao com o servidor
	 */

	use PDO;

	class Connection {
		function connect() {
			$pdo = new PDO("mysql:host=localhost;dbname=id8862754_feedbackdb", "id8862754_root	", "");
			$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

			return $pdo;
		}
	}

?>