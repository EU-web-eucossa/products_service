import { MockMongoose } from 'mock-mongoose';
import mongoose from '@eucossa-web2-product-service-db/mongodb';

const mockMongoose: MockMongoose = new MockMongoose(mongoose);
const tearDownTests = async () => {
	beforeAll(async () => {
		mockMongoose.prepareStorage().then(() => {
			mongoose.connect('mongodb://localhost/ApiTemplate-test');
		});
	});
};

export default tearDownTests;
