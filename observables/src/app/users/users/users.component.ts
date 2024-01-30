import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from './users.service';
import { BehaviorSubject, EMPTY, map, Observable, tap } from 'rxjs';
import { UserType } from '../../types/user.type';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users$: Observable<UserType[]> = EMPTY;
  subject: BehaviorSubject<string>;
  observableSubject: Observable<any>;

  constructor(private userService: UsersService) {
    this.subject = new BehaviorSubject<string>('Initial value');
    this.observableSubject = this.subject.asObservable();
  }
  ngOnInit() {
    this.users$ = this.userService.getUsers().pipe(
      tap((users) => console.log('number of users: ', users.length)),
      map((users) => users.filter((user) => user.id % 2 === 0)),
    );

    this.observableSubject.subscribe((userId) => {
      console.log('User ID pushed to the subject:', userId);
    });
  }

  onUserClicked(user: UserType) {
    console.log('User clicked: ', user);
    this.subject.next(`${user.id}`);
  }

  onChildButtonClicked() {
    console.log('Child button clicked')
  }
}
