import { Router } from "express";

import { FindByTitleContainingController } from "../modules/games/useCases/findByTitleContaining/FindByTitleContainingController";
import { CountAllGamesController } from "../modules/games/useCases/countAllGames/CountAllGamesController";
import { FindUsersByGameIdController } from "../modules/games/useCases/findUsersByGameId/FindUsersByGameIdController";

const gamesRoutes = Router();

const findByTitleContainingController = new FindByTitleContainingController();
const countAllGamesController = new CountAllGamesController();
const findUsersByGameIdController = new FindUsersByGameIdController();

gamesRoutes.get("/findByTitleContaining", findByTitleContainingController.handle);
gamesRoutes.get("/countAllGames", countAllGamesController.handle);
gamesRoutes.get("/findUsersByGameId", findUsersByGameIdController.handle);

export { gamesRoutes }