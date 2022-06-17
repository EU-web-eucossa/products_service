/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmailDataType } from '@eucossa-web2-product-service-common/types';
import ApiTemplatemailer from '@eucossa-web2-product-service-services/mailService/mailer';
import { accountCreationEmailTemplate } from '@eucossa-web2-product-service-services/mailService';
import { mailLogger } from '@eucossa-web2-product-service-utils/logger';
import moment from 'moment';

export async function sendNewAccountEmail(
	data: EmailDataType,
	cb: (err: any, data: any) => Promise<any>,
) {
	try {
		const emailData = accountCreationEmailTemplate(data);
		const response = await ApiTemplatemailer.sendMail({
			from: '"ApiTemplateAutomaton" <ApiTemplate@mail.com>',
			to: data.email,
			subject: 'Welcome to ApiTemplateAutomaton',
			html: emailData,
		});
		mailLogger.info(
			JSON.stringify({
				timestamp: moment().format('LLLL'),
				email: data.email,
				subject: 'Welcome to ApiTemplateAutomaton',
				response: response,
				status: 'success',
			}),
		);
		cb(null, response);
	} catch (err) {
		mailLogger.error(
			JSON.stringify({
				timestamp: moment().format('LLLL'),
				email: data.email,
				subject: 'Welcome to ApiTemplateAutomaton',
				err,
				status: 'Failed',
			}),
		);
		cb(err, null);
	}
}
