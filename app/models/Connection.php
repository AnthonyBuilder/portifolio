<?php
	namespace app\models;

	/**
	 * Classe de conexao com o servidor
	 */

	use PDO;

	class Connection {
		function connect() {
<<<<<<< HEAD
			$pdo = new PDO("mysql:host=localhost;dbname=id8862754_feedbackdb", "id8862754_root	", "");
=======
			$pdo = new PDO("mysql:host=localhost;dbname=feedbackdb", "root", "");
>>>>>>> 3ee331f021c84c80d11e701992141944516c5fd0
			$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

			return $pdo;
		}
	}

?>