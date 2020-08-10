import { TestBed } from '@angular/core/testing';

import { HttpInterceptionBasicAuthService } from './http-interception-basic-auth.service';

describe('HttpInterceptionBasicAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterceptionBasicAuthService = TestBed.get(HttpInterceptionBasicAuthService);
    expect(service).toBeTruthy();
  });
});
