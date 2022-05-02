const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


app.get('/', (req, res)=> {
    res.send('greetings, earthling');
})

const server = app.listen(9000, ()=>{
    console.log('yes, i am listening');
});

const { ExpressPeerServer } = require('peer');
const peerServer = new ExpressPeerServer(server, {
    path: '/'
});

app.use('/peer-server', peerServer)
