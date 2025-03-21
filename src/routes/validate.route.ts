import validateFirstNameRoute from "./validateFirstName.route";
import validateLastNameRoute from "./validateLastName.route";
import validatePasswordRoute from "./validatePassword.route";
import validateEmailRoute from "./validateEmail.route";
import validateAllRoute from "./validateAll.route";

import { FastifyInstance } from "fastify";

export default async function validationRoutes(fastify: FastifyInstance) {
	fastify.register(validateAllRoute);
	fastify.register(validateEmailRoute);
	fastify.register(validatePasswordRoute);
	fastify.register(validateFirstNameRoute);
	fastify.register(validateLastNameRoute);
}
