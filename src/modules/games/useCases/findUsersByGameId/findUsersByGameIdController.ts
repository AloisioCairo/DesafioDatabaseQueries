import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindUsersByGameIdUseCase } from "./FindUsersByGameIdUseCase";

class FindUsersByGameIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_game } = request.headers;

    const findUsersByGameIdUseCase = container.resolve(FindUsersByGameIdUseCase);

    const users = await findUsersByGameIdUseCase.execute({ id_game });

    return response.json(users);
  }
}

export { FindUsersByGameIdController }