import {Component, EventEmitter, Input, Output} from '@angular/core';
import { UserType } from '../../types/user.type';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.scss',
})
export class SingleUserComponent {
  @Input() user!: UserType;
  @Output() userClicked = new EventEmitter<number>()
  @Output() buttonClicked = new EventEmitter<void>()

  onUserClick() {
    this.userClicked.emit(this.user.id)
  }

  emitEvent() {
    this.buttonClicked.emit()
  }
}
