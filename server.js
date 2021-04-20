const fastify = require('fastify')({
    logger: true
  })
  
  fastify.register(require('./routes/mongo'), {
    url: 'mongodb://localhost:27017/'
  })
  fastify.register(require('./routes/our-first-route'))

  const start = async () =>{
    try{
      await fastify.listen(3000)
      //fastify.log.info(`server listening on ${address}`)
    }
    catch (error){
      console.log(error)
      fastify.log.error(error)
    }
  }

  start()
