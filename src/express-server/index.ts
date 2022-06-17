import { Application } from 'express';
import { createServer } from 'http';
import { errorLogger } from '@eucossa-web2-product-service-utils/logger';
import moment from 'moment';

export default function ({ app }: { app: Application }) {
	const server = createServer(app);
	process.on('unhandledRejection', (reason, p) => {
		errorLogger.error(
			JSON.stringify({
				timestamp: moment().format('LLLL'),
				message: 'Unhandled Rejection at Promise',
				reason,
				promise: p,
			}),
		);
	});
	process.on('uncaughtException', (err) => {
		errorLogger.error(
			JSON.stringify({
				timestamp: moment().format('LLLL'),
				message: err.message,
				stack: err.stack,
			}),
		);
	});

	return server;
}
