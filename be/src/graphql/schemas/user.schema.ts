import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
    @Field(type => Int)
    id: number;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field(type => Int)
    age: number;
}