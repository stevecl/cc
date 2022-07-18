var WebSocketServer = require('ws').Server;

// import { WebSocket } from 'ws'
// console.log('WebSocket', WebSocket)
var wss = new WebSocketServer({ port: 3333 }, () => {
    console.log('socket创建成功')
})

let clients = [];
let i = 0;

let data = {
    date: "2021-11-25 11:19:25",
    questionCode: "00001",
    segmentType: "2",
    sessionsCode: "3fb7aa3ca41f4c32b76a6b7302034521",
    status: "next"
}

wss.on('connection', function(ws) {
    ws.name = ++i
    clients.push(ws)

    setTimeout(() => {
        ws.send(JSON.stringify(data))
    }, 2000);

    ws.on('message', function(msg) {
        console.log(11, msg)
        console.log('msg', msg.toString())
        console.log(22, msg)
        broadcast(msg, ws) // 把客户端发来的消息，广播给其他客户端
    })

    ws.on('close', function() {
        console.log('close event')
    })
})

function broadcast(msg, ws) {
    for(var key in clients) {
        console.log('msgmsg',msg)
        clients[key].send(ws.name + '说:' + Buffer.from([0x93, 0xe4, 0xb8, 0x80]))
    }
}