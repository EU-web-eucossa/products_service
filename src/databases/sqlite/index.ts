import { environmentConfig } from '@eucossa-web2-product-service-config';
import knex from 'knex';
import config, { knexEnvType } from './../../../knexfile';

type Env = keyof knexEnvType

const sqliteConnection = knex(config[environmentConfig.NODE_ENV as unknown as Env]);

export default sqliteConnection;

export { sqliteConnection };