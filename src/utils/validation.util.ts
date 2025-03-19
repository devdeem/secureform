import { z } from "zod";

// Define schema for email validation
const emailSchema = z
	.string()
	.trim()
	.nonempty({ message: "E-mail field cannot be empty" })
	.email({ message: "E-mail is not valid format" })
	.min(6, { message: "E-mail is less than 6 characters long" })
	.max(254, { message: "E-mail is more than 254 characters long" });

// Define schema for password validation
const passwordSchema = z
	.string()
	.nonempty({ message: "Password field cannot be empty" })
	.min(8, { message: "Password cannot be less than 8 characters long" })
	.max(128, { message: "Password cannot be more than 128 characters long" })
	.regex(/[A-Z]/, { message: "Password does not contain any uppercase letter" })
	.regex(/[a-z]/, { message: "Password does not contain any lowercase letter" })
	.regex(/[0-9]/, { message: "Password does not contain any number" })
	.regex(/[@$!%*?&]/, { message: "Password does not contain any special character" });

// Function to validate email data
export function validateEmail(email: string) {
	const result = emailSchema.safeParse(email);

	if (!result?.success) {
		const firstError = Object.values(result?.error?.format())[0][0];

		return { success: false, error: firstError };
	}

	return { success: true };
}

// Function to validate password data
export function validatePassword(password: string) {
	const result = passwordSchema.safeParse(password);

	if (!result?.success) {
		const firstError = Object.values(result?.error?.format())[0][0];

		return { success: false, error: firstError };
	}

	return { success: true };
}
