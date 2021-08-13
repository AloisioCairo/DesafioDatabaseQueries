import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllUsersOrderedByFirstNameUseCase } from "./FindAllUsersOrderedByFirstNameUseCase";

class FindAllUsersOrderedByFirstNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllUsersOrderedByFirstNameUseCase = container.resolve(FindAllUsersOrderedByFirstNameUseCase);

    const listUsers = await findAllUsersOrderedByFirstNameUseCase.execute();

    return response.json(listUsers);
  }
}

export { FindAllUsersOrderedByFirstNameController } 