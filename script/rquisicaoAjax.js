
var request = null;

function createRequest() {
	try {
		request = new XMLHttpRequest();
	} catch (othermicrosoft) {
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (othermicrosoft) {
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (failed) {
				request = null;
			}
		}
	}

	if (request === null) {
		alert("Erro ao criar uma requisicao ao objeto");
	}
}

function getInfo() {
	createRequest();
	var url = "getFeed.php";

	request.open("GET", url, true);
	request.onreadystatechange = atualizaPagina;
	request.send(null);
}