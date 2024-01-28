import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserType} from "../../types/user.type";

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<UserType[]>('https://jsonplaceholder.typicode.com/users')
  }
}

