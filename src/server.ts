import { createServer } from "./app";

const fastify = createServer();

fastify.listen({ port: 3000 }, (err, address) => {
	// Cache critical errors and exit the process
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}

	fastify.log.info(`Server listening on ${address}`);
});
