import { TestBed } from '@angular/core/testing';

import { Posteg1Service } from './posteg1.service';

describe('Posteg1Service', () => {
  let service: Posteg1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Posteg1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
