import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindByTitleContainingUseCase } from "./FindByTitleContainingUseCase";

class FindByTitleContainingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const title = request.headers;

    const findByTitleContainingUseCase = container.resolve(FindByTitleContainingUseCase);

    const games = await findByTitleContainingUseCase.execute(title);

    return response.json(games);
  }
}

export { FindByTitleContainingController }