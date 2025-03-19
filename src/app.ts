import validationRoutes from "./routes/validate.route";

import rateLimit from "@fastify/rate-limit";
import Fastify from "fastify";

export function createServer() {
	const fastify = Fastify({ logger: true });

	// Securify check for rate limit
	fastify.register(rateLimit, {
		max: 10,
		timeWindow: 60_000,
		errorResponseBuilder: (req, context) => ({
			success: false,
			message: "Too many requests! Try it again later.",
			max: context.max,
			timeWindow: 60_000,
		}),
	});

	fastify.register(validationRoutes);
	return fastify;
}
