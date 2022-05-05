import { TestBed } from '@angular/core/testing';

import { LoginuserserviceService } from './loginuserservice.service';

describe('LoginuserserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginuserserviceService = TestBed.get(LoginuserserviceService);
    expect(service).toBeTruthy();
  });
});
