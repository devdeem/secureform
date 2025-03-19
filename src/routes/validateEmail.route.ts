import { validateEmail } from "../utils/validation.util";

import { FastifyInstance } from "fastify";

export default async function validateEmailRoute(fastify: FastifyInstance) {
	fastify.post("/validate/email", async (request, reply) => {
		const { email } = request?.body as { email?: string };

		const result = email ? validateEmail(email) : { success: false, error: "E-mail field cannot be empty" };

		if (!result?.success) {
			return reply.status(400).send({ success: false, error: result?.error });
		}

		return reply.send({ success: true });
	});
}
