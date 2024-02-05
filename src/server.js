import http from 'node:http'

const server = http.createServer(async (req, res) => {
  console.log('Server started')
})

server.listen(3333)
