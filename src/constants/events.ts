/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
const AppEvents = {
	RESET_PASSWORD: 'RESET_PASSWORD',
	NEW_ACCOUNT: 'NEW_ACCOUNT',
};

const socketEvents = {
	connection:'connection',
	disconnect:'disconnect',
	error:'error',
	message:'message',
	reconnect:'reconnect',
	reconnect_attempt:'reconnect_attempt',
	reconnect_failed:'reconnect_failed',
	reconnect_error:'reconnect_error',
	reconnecting:'reconnecting',
	reconnect_complete:'reconnect_complete',
	ping:'ping',
	pong:'pong',
	open:'open',
	close:'close',
};

export default AppEvents;

export { AppEvents,socketEvents };

export type AppEventsType = typeof AppEvents;

export type SocketEventType = typeof socketEvents
