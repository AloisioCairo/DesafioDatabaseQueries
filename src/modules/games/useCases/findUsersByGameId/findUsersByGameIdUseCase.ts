import { inject, injectable } from "tsyringe";
import { User } from "../../../users/entities/User";
import { IGamesRepository } from "../../repositories/IGamesRepository";

interface IRequest {
  id_game: string;
}

@injectable()
class FindUsersByGameIdUseCase {
  constructor(@inject("GamesRepository")
  private gamesRepository: IGamesRepository) { }

  async execute({ id_game }: IRequest): Promise<User[]> {
    const users = this.gamesRepository.findUsersByGameId(id_game);

    return users;
  }

}

export { FindUsersByGameIdUseCase }