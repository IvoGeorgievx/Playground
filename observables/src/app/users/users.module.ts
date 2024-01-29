import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {RouterOutlet} from "@angular/router";
import { SingleUserComponent } from './single-user/single-user.component';
import { SelectedUserComponent } from './selected-user/selected-user.component';

@NgModule({
  declarations: [UsersComponent, SingleUserComponent, SelectedUserComponent, ],
  imports: [CommonModule, RouterOutlet],
  exports: [UsersComponent, SingleUserComponent],
})
export class UsersModule {}
