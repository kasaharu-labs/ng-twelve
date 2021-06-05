import { TestBed } from '@angular/core/testing';

import { UsersApi } from './users.api';

describe('UsersApi', () => {
  let api: UsersApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    api = TestBed.inject(UsersApi);
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });
});
