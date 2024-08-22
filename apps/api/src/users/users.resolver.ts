import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('uid', { type: () => String }) uid: string) {
    return this.usersService.findOne(uid);
  }

  @Mutation(() => User)
  updateUser(
    @Args('uid', { type: () => String }) uid: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.usersService.update(uid, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('uid', { type: () => String }) uid: string) {
    return this.usersService.remove(uid);
  }
}
