import { TestBed } from '@angular/core/testing';

import { ManagereporteeService } from './managereportee.service';

describe('ManagereporteeService', () => {
  let service: ManagereporteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagereporteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
