import fastify from "fastify";

const server = fastify()

const HOST = 'localhost' //127.0.0.1
const PORT = 5000

server.get('/', async(req, res) => {
    res.send('Servidor no ar!')
})

server.listen({
    port: PORT,
    host: HOST
})
.then(() => console.log(`servidor rodando em http://${HOST}:${PORT}`))
.catch(err => console.log(`Erro ao subir o servidor: ${err}`))
