import { z } from "zod";

// Define schema for email validation
const emailSchema = z
	.string()
	.trim()
	.nonempty({ message: "E-mail field cannot be empty" })
	.email({ message: "E-mail is not valid format" })
	.min(6, { message: "E-mail is less than 6 characters long" })
	.max(254, { message: "E-mail is more than 254 characters long" });

// Function to validate email data
export function validateEmail(email: string) {
	const result = emailSchema.safeParse(email);

	if (!result?.success) {
		const firstError = Object.values(result?.error?.format())[0][0];

		return { success: false, error: firstError };
	}

	return { success: true };
}

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

// Function to validate password data
export function validatePassword(password: string) {
	const result = passwordSchema.safeParse(password);

	if (!result?.success) {
		const firstError = Object.values(result?.error?.format())[0][0];

		return { success: false, error: firstError };
	}

	return { success: true };
}

// Define schema for first name validation
const firstNameSchema = z
	.string()
	.trim()
	.nonempty({ message: "First name field cannot be empty" })
	.min(2, { message: "First name cannot be less than 2 characters long" })
	.max(50, { message: "First name cannot be more than 50 characters long" })
	.regex(/^[a-zA-Z]+$/, { message: "First name cannot contain any special characters or numbers" });

// Function to validate first name data
export function validateFirstName(firstName: string) {
	const result = firstNameSchema.safeParse(firstName);

	if (!result?.success) {
		const firstError = Object.values(result?.error?.format())[0][0];

		return { success: false, error: firstError };
	}

	return { success: true };
}

// Define schema for last name validation
const lastNameSchema = z
	.string()
	.trim()
	.nonempty({ message: "Last name field cannot be empty" })
	.min(2, { message: "Last name cannot be less than 2 characters long" })
	.max(50, { message: "Last name cannot be more than 50 characters long" })
	.regex(/^[a-zA-Z]+$/, { message: "Last name cannot contain any special characters or numbers" });

// Function to validate last name data
export function validateLastName(lastName: string) {
	const result = lastNameSchema.safeParse(lastName);

	if (!result?.success) {
		const firstError = Object.values(result?.error?.format())[0][0];

		return { success: false, error: firstError };
	}

	return { success: true };
}
