const express = require('express')
const next = require('next')
var host = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.NODE_PORT, 10) || 7000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.post('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}) 