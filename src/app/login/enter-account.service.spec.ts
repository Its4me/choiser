import { TestBed } from '@angular/core/testing';

import { EnterAccountService } from './enter-account.service';

describe('EnterAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnterAccountService = TestBed.get(EnterAccountService);
    expect(service).toBeTruthy();
  });
});
