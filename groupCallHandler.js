const createPeerServerListeners = (peerServer) => {
  peerServer.on('connection', (client) => {
    console.log('connection  to remote javascript server accepted');
    console.log(client.id);
  });
};

module.exports = {
  createPeerServerListeners
};
