var xhttp = new XMLHttpRequest();

function xhttpGet(url, callback, parameters = '') {
    xhttp.onreadystatechange = callback;
    xhttp.open('GET', url + '.php', true);
    xhttp.send();
}

function xhttpPost(url, callback, parameters = '') {
    xhttp.onreadystatechange = callback;
    xhttp.open('POST', url + '.php', true);

    if (typeof (parameters) != 'object') {
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }

    xhttp.send(parameters);
}

function xhttpPut(url, callback, parameters = '') {
    xhttp.onreadystatechange = callback;
    xhttp.open('PUT', url + '.php' + parameters, true);
    xhttp.send();
}

function xhttpDelete(url, callback, parameters = '') {
    xhttp.onreadystatechange = callback;
    xhttp.open('DELETE', url + '.php' + parameters, true);
    xhttp.send(parameters);
}


function befforeSend(callback) {
    if (xhttp.readyState < 4) {
        callback();
    }
}

function success(callback) {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
        callback();
    }
}

function error(callback) {
    xhttp.onerror = callback;
}