import { Server } from 'socket.io';
import { createServer } from 'http';
import { socketEvents } from '@eucossa-web2-product-service-constants/events';

type ServerType = ReturnType<typeof createServer>;

export default ({ server }: { server: ServerType }) => {
	const io = new Server(server);

	io.on(socketEvents.connection, (socket) => {
		console.log('New client connected');
		socket.emit('message', 'Welcome , Client connection successful');
		socket.on(socketEvents.disconnect, () => {
			console.log('Client disconnected');
		});
	});

	return server;
};
