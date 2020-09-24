const fastify = require("fastify")({
  logger : true
});

fastify.register(require("fastify-cors"), {
  origin: '*',
});

fastify.register(require('./functions/functions'))

fastify.listen(process.env.PORT || 3000 , '0.0.0.0' , (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info("server listening");
});
