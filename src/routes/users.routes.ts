import { Router } from "express";

import { FindUserWithGamesByIdController } from "../modules/users/useCases/findUserWithGamesById/FindUserWithGamesByIdController";
import { FindAllUsersOrderedByFirstNameController } from "../modules/users/useCases/findAllUsersOrderedByFirstName/FindAllUsersOrderedByFirstNameController";
import { FindUserByFullNameController } from "../modules/users/useCases/findUserByFullName/FindUserByFullNameController";

const usersRoutes = Router();

const findUserWithGamesByIdController = new FindUserWithGamesByIdController();
const findAllUsersOrderedByFirstNameController = new FindAllUsersOrderedByFirstNameController();
const findUserByFullNameController = new FindUserByFullNameController();

usersRoutes.get("/findAllUsersOrderedByFirstName", findAllUsersOrderedByFirstNameController.handle);
usersRoutes.get("/findUserByFullName", findUserByFullNameController.handle);
usersRoutes.get("/findUserWithGamesById", findUserWithGamesByIdController.handle);

export { usersRoutes }