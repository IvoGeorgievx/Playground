import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {UserResolver} from "./graphql/resolvers/user.resolver";
import {UsersModule} from "./users/users.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: true,
        typePaths: ['./**/*.gql'],
        playground: true,
    }), UsersModule,
    TypeOrmModule.forRoot({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres-user",
        password: "password",
        database: "fullstack-test",
        synchronize: true,
        logging: false,
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        migrations: [],
        subscribers: [],
    })],
    controllers: [AppController],
    providers: [AppService, UserResolver],
})
export class AppModule {
}
