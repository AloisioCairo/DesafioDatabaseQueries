import { Request, Response } from "express";
import { container } from "tsyringe";

import { User } from "../../entities/User";
import { FindUserWithGamesByIdUseCase } from "./FindUserWithGamesByIdUseCase";

class FindUserWithGamesByIdController {
  async handle(request: Request, response: Response): Promise<User | undefined> {
    const { user_id } = request.headers;

    const findUserWithGamesByIdUseCase = container.resolve(FindUserWithGamesByIdUseCase);

    const usersAndGames = await findUserWithGamesByIdUseCase.execute({ user_id });

    return response.json(usersAndGames);
  }
}

export { FindUserWithGamesByIdController } 