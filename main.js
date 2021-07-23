import Worker from './Worker';

window.Worker = Worker;

worker = new Worker('worker.js');
worker.addEventListener('message', receiveMessage);

function receiveMessage(e) {
    console.log(e.data);
}

worker.postMessage('cowboy');