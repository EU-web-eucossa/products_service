import express from 'express';
import setup from '@eucossa-web2-product-service-express';

const app = express();
setup({ app });

export default app;
