const fastify = require('fastify')({
    logger: true
})

fastify.register(require('./routes'))
fastify.register(require('fastify-socket.io'))
const start = async () => {
    try {
        await fastify.listen(3000)
        await fastify.log.info(`Server listening on`)
    } catch (err) {
 fastify.log.error(err)
        process.exit(1)
    }
}

start()