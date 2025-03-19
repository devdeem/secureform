import { validateEmail, validatePassword } from "../utils/validation.util";

import { FastifyInstance } from "fastify";

export default async function validateAllRoute(fastify: FastifyInstance) {
	fastify.post("/validate", async (request, reply) => {
		const { email, password } = request.body as { email?: string; password?: string };

		const emailResult = email ? validateEmail(email) : { success: false, error: "E-mail Address field is empty" };
		//prettier-ignore
		const passwordResult = password ? validatePassword(password) : { success: false, error: "Password field is empty" };

		if (!emailResult.success || !passwordResult.success) {
			return reply.status(400).send({
				success: false,
				errors: {
					email: emailResult.success ? "All E-mail Address checks passed" : emailResult.error,
					password: passwordResult.success ? "All Password checks passed" : passwordResult.error,
				},
			});
		}

		return reply.send({ success: true, message: "All checks successfully passed" });
	});
}
