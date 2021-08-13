import { container } from "tsyringe";

import { IGamesRepository } from "../../modules/games/repositories/IGamesRepository";
import { GamesRepository } from "../../modules/games/repositories/implementations/GamesRepository";

import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";

container.registerSingleton<IGamesRepository>(
  "GamesRepository",
  GamesRepository
)

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)