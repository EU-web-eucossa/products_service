/* eslint-disable @typescript-eslint/no-explicit-any */
import config from './../../../knexfile';
import { environmentConfig } from '@eucossa-web2-product-service-config';
import knex from 'knex';

const pgLog = {
	log: {
		warn: (message: any) => {
			console.log(message);

		},
		debug: (message: any) => {
			console.log(message);

		},
		error: (message: any) => {
			console.log(message);

		}
	}
};

const pgConnection = knex({
	...config[environmentConfig.NODE_ENV],
	log: pgLog.log
});


export default pgConnection;

export { pgConnection };