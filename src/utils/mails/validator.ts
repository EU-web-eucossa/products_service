import emailRegex from '@eucossa-web2-product-service-constants/emailRegex';

export function validateEmail(email: string): boolean {
	return emailRegex.test(email);
}
