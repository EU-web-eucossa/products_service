import AppEvents from '@eucossa-web2-product-service-constants/events';
import { EmailDataType } from '@eucossa-web2-product-service-common/types';
import { Publisher } from '@eucossa-web2-product-service-RedisBaseClient';

export function subscribeToNewAccountMailer(emailData: EmailDataType) {
	Publisher.publish(
		AppEvents.NEW_ACCOUNT,
		JSON.stringify({
			...emailData,
		}),
	);
}
