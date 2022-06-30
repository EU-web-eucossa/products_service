import { EventBus } from '@eucossa-web2-product-service-common/EventBus';

export function makeAddOrder() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return async (data: any) => {
		const queue = new EventBus('ORDER_QUEUE');
		queue.sendMessageToQueue(JSON.stringify(data));
		
		return {
			message: 'Order submitted',
		};
	};
}
