import { TestBed } from '@angular/core/testing';

import { AddManagerService } from './add-manager.service';

describe('AddManagerService', () => {
  let service: AddManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
