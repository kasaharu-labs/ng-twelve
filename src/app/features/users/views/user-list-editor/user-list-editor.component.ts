import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../../domain/user';

@Component({
  selector: 'app-user-list-editor',
  templateUrl: './user-list-editor.component.html',
  styleUrls: ['./user-list-editor.component.scss'],
})
export class UserListEditorComponent implements OnInit {
  constructor() {}
  @Input()
  users: User[] | null = null;

  @Output()
  userUpdated = new EventEmitter<User>();

  ngOnInit(): void {}

  submit(user: User): void {
    this.userUpdated.emit(user);
  }
}
