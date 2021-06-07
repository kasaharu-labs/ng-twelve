import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../domain/user';

@Injectable({
  providedIn: 'root',
})
export class UsersApi {
  constructor(private readonly _http: HttpClient) {}
  _users$ = new BehaviorSubject<User[] | null>(null);

  get users$(): Observable<User[] | null> {
    return this._users$.asObservable();
  }

  getUsers(): void {
    this._http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((val) => this._users$.next(val));
  }

  patchUser(userId: number, body: Partial<User>): void {
    this._http.patch<User>(`https://jsonplaceholder.typicode.com/users/${userId}`, body).subscribe((val) => {
      const currentUsers = this._users$.getValue();
      if (currentUsers === null) {
        this._users$.next([val]);
        return;
      }

      this._users$.next([...currentUsers, val]);
    });
  }
}
