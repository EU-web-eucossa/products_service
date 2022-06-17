/* eslint-disable @typescript-eslint/no-explicit-any */
// import './eventSubscriber';
import app from './app';
import chalk from 'chalk';
import { environmentConfig } from './config';
import expressServer from './express-server';
import moment from 'moment';
import socketServer from './socket-server';


const server = socketServer({server:expressServer({app})});

server.listen(environmentConfig.PORT, () => {
	const time = moment(new Date().getTime()).format('LLLL');
	const connectionString = `Server started on ${chalk.yellow(
		time,
	)} \nApp running running on ${chalk.bold.yellow(
		`http://localhost:${environmentConfig.PORT}`,
	)}`;
	console.log(connectionString);
});
