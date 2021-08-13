import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IFindUserWithGamesDTO } from "../../dtos";

@injectable()
class FindUserWithGamesByIdUseCase {
  constructor(@inject("UsersRepository")
  private usersRepository: IUsersRepository) { }

  async execute({ user_id }: IFindUserWithGamesDTO): Promise<User | undefined> {
    const usersAndGames = this.usersRepository.findUserWithGamesById({ user_id });

    return usersAndGames;
  }
}

export { FindUserWithGamesByIdUseCase } 