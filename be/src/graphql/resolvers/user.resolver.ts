// src/graphql/resolvers/user.resolver.ts
import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../schemas/user.schema';
import { UsersService } from '../../users/users.service';

@Resolver(of => User)
export class UserResolver {
    constructor(private usersService: UsersService) {}

    @Query(returns => [User])
    async getUsers(): Promise<User[]> {
        return await this.usersService.findAll();
    }
}