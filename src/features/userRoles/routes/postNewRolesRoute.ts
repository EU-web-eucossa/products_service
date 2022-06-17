/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { UserRoleController } from '@eucossa-web2-product-service-features/userRoles/controllers';
import { UserRoleUseCases } from '@eucossa-web2-product-service-features/userRoles/use-cases';
import userRolesRepository from '@eucossa-web2-product-service-features/userRoles/repository';


export default function postNewRolesRoute(app: Router) {
	return (pathName: string) => {
		const userRolesUseCase = new UserRoleUseCases(userRolesRepository);
		const controller = new UserRoleController(userRolesUseCase);
		const folderRouter = Router();
		app.use(`${pathName}`, folderRouter);
		folderRouter.put('/insert', controller.createRoles);

	};
}