import express from 'express'
import path from 'path'
import seasonsRoutes from './routes/taskmaster'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1', seasonsRoutes)

export default server
