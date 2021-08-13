import { getRepository, Repository } from 'typeorm';

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from '../../dtos';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({ user_id }: IFindUserWithGamesDTO): Promise<User | undefined> {
    return await this.repository.findOne({ id: user_id }, { relations: ["games"] }); // Usando ORM
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return this.repository.query('select * from users order by users.first_name asc'); // Usando raw query
  }

  async findUserByFullName({ first_name, last_name,
  }: IFindUserByFullNameDTO): Promise<User[]> {
    return this.repository.query('select * from users where lower(users.first_name) = lower($1) ' +
      'and lower(users.last_name) = lower($2)', [first_name, last_name]); // Usando raw query
  }
}
