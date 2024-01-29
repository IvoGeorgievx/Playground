import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { UsersService } from './users.service';
import { EMPTY, map, Observable, tap } from 'rxjs';
import { UserType } from '../../types/user.type';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users$: Observable<UserType[]> = EMPTY;
  constructor(private userService: UsersService) {}
  ngOnInit() {
    this.users$ = this.userService.getUsers().pipe(
      tap((users) => console.log('number of users: ', users.length)),
      map((users) => users.filter((user) => user.id % 2 === 0)),
    );
  }

  onUserClicked(user: UserType) {
    console.log('User clicked: ', user)
  }


}
