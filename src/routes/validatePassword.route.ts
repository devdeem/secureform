import { validatePassword } from "../utils/validation.util";

import { FastifyInstance } from "fastify";

export default async function validatePasswordRoute(fastify: FastifyInstance) {
	fastify.post("/validate/password", async (request, reply) => {
		const { password } = request.body as { password?: string };

		const result = password
			? validatePassword(password)
			: { success: false, error: "Password field cannot be empty" };

		if (!result?.success) {
			return reply.status(400).send({ success: false, error: result?.error });
		}

		return reply.send({ success: true });
	});
}
