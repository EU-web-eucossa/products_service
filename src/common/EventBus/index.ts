/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { rabbitmqConfig } from '@eucossa-web2-product-service-config';
import { Connection, Message } from 'amqplib-as-promised';

export class EventBus {
	private connection: Connection;

	private queue: string;

	constructor(queueName: string) {
		this.connection = new Connection(rabbitmqConfig.url);
		this.queue = queueName;
	}

	sendMessageToQueue = async (message: string) => {
		await this.connection.init();
		const channel = await this.connection.createChannel();
		await channel.assertQueue(this.queue);
		await channel.sendToQueue(this.queue, Buffer.from(message));
		console.log('Message sent', message);

		await channel.close();
	};

	consumeQueue = async (cb?: (data: any) => Promise<void>): Promise<void> => {
		await this.connection.init();
		const channel = await this.connection.createChannel();
		await channel.assertQueue(this.queue);
		await channel.consume(this.queue, (message: Message) => {
			if (message === null) cb!(null);

			cb!(message);
		});
	};
}
