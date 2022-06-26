import express from 'express';
import expressLoader from '@eucossa-web2-product-service-express';

const app = express();

expressLoader({ app });

export default app;
