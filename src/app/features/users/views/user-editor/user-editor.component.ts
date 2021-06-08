import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../../../domain/user';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss'],
})
export class UserEditorComponent implements OnInit {
  constructor() {}
  @Input()
  user!: User;

  @Output()
  submit = new EventEmitter<User>();

  form = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl(''),
  });

  ngOnInit(): void {
    this.form.setValue({
      name: this.user.name,
      username: this.user.username,
      email: this.user.email,
      phone: this.user.phone,
      website: this.user.website,
    });

    this.form.valueChanges.subscribe((val) => this.submit.emit(val));
  }
}
