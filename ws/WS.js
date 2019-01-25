var WebSocketServeur = require("ws").Server;
var wss = new WebSocketServeur({ port: 3000});
wss.on("connection", function(ws) {
    ws.send("welcome to cyber chat");
});
