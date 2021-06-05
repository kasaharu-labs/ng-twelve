import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../domain/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor() {}
  @Input()
  users: User[] | null = null;

  ngOnInit(): void {}
}
