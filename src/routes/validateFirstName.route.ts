import { validateFirstName } from "../utils/validation.util";

import { FastifyInstance } from "fastify";

export default async function validateFirstNameRoute(fastify: FastifyInstance) {
	fastify.post("/validate/firstname", async (request, reply) => {
		const { firstName } = request.body as { firstName?: string };

		const result = firstName
			? validateFirstName(firstName)
			: { success: false, error: "First name field cannot be empty" };

		if (!result?.success) {
			return reply.status(400).send({ success: false, error: result?.error });
		}

		return reply.send({ success: true });
	});
}
