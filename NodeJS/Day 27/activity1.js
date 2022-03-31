let express = require('express');
let socketIo = require('socket.io');
let app = express();
let http = require('http').Server(app);
let io = socketIo(http);
app.get('/', (res, resp) => {
    resp.sendFile(__dirname+'/activity.html');
});
io.on('connection', (socket) => {
    socket.on('msg', (data) => {
        io.emit('msg', `${data}`);
    });
});
http.listen(2000, () => console.log('Server is runnig at port 2000'));
 