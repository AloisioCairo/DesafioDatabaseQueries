import { inject, injectable } from "tsyringe";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class CountAllGamesUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository) { }

  async execute(): Promise<[{ count: string }]> {
    const games = await this.gamesRepository.countAllGames();

    return games;
  }
}

export { CountAllGamesUseCase }