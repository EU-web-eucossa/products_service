import { environmentConfig } from '@eucossa-web2-product-service-config';
import knex from 'knex';
import config, { knexEnvType } from './../../../knexfile';

type Env = keyof knexEnvType

const oracleConnection = knex(config[environmentConfig.NODE_ENV as Env]);

export default oracleConnection;

export { oracleConnection };