import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../domain/user';
import { UsersApi } from '../../../../infrastructures/api/users.api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private readonly _usersApi: UsersApi) {}
  users$: Observable<User[]> | null = null;
  editable = false;
  toggleButtonText = '編集モードへ';

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.users$ = this._usersApi.getUsers();
  }

  toggleMode(): void {
    this.editable = !this.editable;
    this.toggleButtonText = this.editable ? '編集モードを終了' : '編集モードへ';
  }
}
