import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {RouterOutlet} from "@angular/router";
import { SingleUserComponent } from './single-user/single-user.component';

@NgModule({
  declarations: [UsersComponent, SingleUserComponent, ],
  imports: [CommonModule, RouterOutlet],
  exports: [UsersComponent, SingleUserComponent],
})
export class UsersModule {}
