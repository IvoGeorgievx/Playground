import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, RouterOutlet],
  exports: [UsersComponent],
})
export class UsersModule {}
