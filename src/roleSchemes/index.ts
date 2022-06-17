import { environmentConfig } from '@eucossa-web2-product-service-config';
import userRoleModel from '@eucossa-web2-product-service-features/userRoles/models';

class RoleMigrator {

	private migrateUserPermissions = async () => {
		await userRoleModel.InsertRoles();

	};

	migrate = async () => {
		await this.migrateUserPermissions();
		console.log(`Role migration successful----${environmentConfig.NODE_ENV}`);
	};

}
const migrate = new RoleMigrator().migrate;

export { migrate as migrateRole };
