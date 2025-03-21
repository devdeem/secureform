import { validateLastName } from "../utils/validation.util";

import { FastifyInstance } from "fastify";

export default async function validateLastNameRoute(fastify: FastifyInstance) {
	fastify.post("/validate/lastname", async (request, reply) => {
		const { lastName } = request.body as { lastName?: string };

		const result = lastName
			? validateLastName(lastName)
			: { success: false, error: "Last name field cannot be empty" };

		if (!result?.success) {
			return reply.status(400).send({ success: false, error: result?.error });
		}

		return reply.send({ success: true });
	});
}
