import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IFindUserByFullNameDTO } from "../../dtos";

// interface IRequest {
//   first_name: String;
//   last_name: String;
// }

@injectable()
class FindUserByFullNameUseCase {
  constructor(@inject("UsersRepository")
  private usersRepository: UsersRepository) { }

  async execute({ first_name, last_name }: IFindUserByFullNameDTO): Promise<User[]> {

    const users = await this.usersRepository.findUserByFullName({ first_name, last_name });

    return users;
  }
}

export { FindUserByFullNameUseCase } 