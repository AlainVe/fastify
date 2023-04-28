import { fastify } from 'fastify';

const build = (opts = {}) => {
  const app = fastify(opts);

  app.get('/', async (request, reply) => {
    reply.send({ hello: 'world!' });
  });

  return app;
};

export default build;
