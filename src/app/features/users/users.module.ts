import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users/users.component';
import { UsersComponent } from './containers/users/users.component';
import { UserListComponent } from './views/user-list/user-list.component';
import { UserListEditorComponent } from './views/user-list-editor/user-list-editor.component';
import { UserEditorComponent } from './views/user-editor/user-editor.component';

@NgModule({
  declarations: [UsersPageComponent, UsersComponent, UserListComponent, UserListEditorComponent, UserEditorComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
