self.addEventListener('message', receiveMessage);

function receiveMessage(e) {
    self.postMessage('Sup, ' + e.data + '?');
}