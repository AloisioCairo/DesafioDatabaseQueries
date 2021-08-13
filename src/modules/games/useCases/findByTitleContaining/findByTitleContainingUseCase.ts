import { inject, injectable } from "tsyringe";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";

interface IRequest {
  title: string;
}

@injectable()
class FindByTitleContainingUseCase {
  constructor(@inject("GamesRepository")
  private gamesRepository: IGamesRepository) { }

  async execute(title: IRequest): Promise<Game[]> {
    const games = await this.gamesRepository.findByTitleContaining(title);

    return games;
  }
}

export { FindByTitleContainingUseCase }