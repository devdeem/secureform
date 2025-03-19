import { validateEmail, validatePassword, validateFirstName } from "../utils/validation.util";

import { FastifyInstance } from "fastify";

export default async function validateAllRoute(fastify: FastifyInstance) {
	fastify.post("/validate", async (request, reply) => {
		const { email, password, firstName } = request.body as {
			email?: string;
			password?: string;
			firstName?: string;
		};

		const emailResult = email ? validateEmail(email) : { success: false, error: "E-mail field cannot be empty" };
		//prettier-ignore
		const passwordResult = password ? validatePassword(password) : { success: false, error: "Password field cannot be empty" };
		//prettier-ignore
		const firstNameResult = firstName ? validateFirstName(firstName) : { success: false, error: "First name field cannot be empty" };

		if (!emailResult.success || !passwordResult.success || !firstNameResult.success) {
			return reply.status(400).send({
				success: false,
				errors: {
					firstName: firstNameResult.success ? null : firstNameResult?.error,
					email: emailResult.success ? null : emailResult?.error,
					password: passwordResult.success ? null : passwordResult?.error,
				},
			});
		}

		return reply.send({ success: true });
	});
}
