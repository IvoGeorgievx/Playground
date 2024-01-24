// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import {User} from "../entity/user.entity";
import {UserResolver} from "../graphql/resolvers/user.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService, UserResolver],
    exports: [UsersService],
})
export class UsersModule {}