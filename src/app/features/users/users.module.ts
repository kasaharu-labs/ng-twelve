import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './containers/users/users.component';
import { UsersPageComponent } from './pages/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserEditorComponent } from './views/user-editor/user-editor.component';
import { UserListEditorComponent } from './views/user-list-editor/user-list-editor.component';
import { UserListComponent } from './views/user-list/user-list.component';

@NgModule({
  declarations: [UsersPageComponent, UsersComponent, UserListComponent, UserListEditorComponent, UserEditorComponent],
  imports: [CommonModule, ReactiveFormsModule, UsersRoutingModule],
})
export class UsersModule {}
