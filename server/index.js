import express from 'express'
import logger from 'morgan'

import { Server } from 'socket.io'
import { createServer } from 'node:http'

const port = proces.env.PORT ?? 3000

const app = express()
const server = createServer(app)
const io = socketIO(server);
app.use(logger('dev'))

// manejo de conexión de cliente
io.on('connection', (socket) => {
    console.log('Client connected')

    // manejo de eventos personalizados enviados por cliente
    socket.on('evento', (data) => {
        console.log('Event received: ', data)
    })

    // manejo de desconexión de cliente
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    })
})

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html')
})

app.get('/', (req, res) => {
    res.send('<h1>Servidor del Chat</h1>');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})