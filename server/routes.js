async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
        fastify.io.emit('hello socket')
        return { hello: 'world' }
})
 fastify.get('/test', async (request, reply) => {
    return { test: 'test' }
})
}

module.exports = routes