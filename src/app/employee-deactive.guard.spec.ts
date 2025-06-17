import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { employeeDeactiveGuard } from './employee-deactive.guard';

describe('employeeDeactiveGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => employeeDeactiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
