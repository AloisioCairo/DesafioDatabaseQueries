import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindUserByFullNameUseCase } from "./FindUserByFullNameUseCase";

class FindUserByFullNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name } = request.headers;

    const findUserByFullNameUseCase = container.resolve(FindUserByFullNameUseCase);

    const listUsers = await findUserByFullNameUseCase.execute({ first_name, last_name });

    return response.json(listUsers);
  }
}

export { FindUserByFullNameController } 