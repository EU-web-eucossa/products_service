import { IUserRoleRepository } from '@eucossa-web2-product-service-features/userRoles/interfaces';

export function makeAddRoles({
	repository,
}: {
	repository: IUserRoleRepository,
}) {
	return async () => {
		const roles = await repository.createRoles();

		return roles;
	};
}
