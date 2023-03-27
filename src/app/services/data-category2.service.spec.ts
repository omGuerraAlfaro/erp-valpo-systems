import { TestBed } from '@angular/core/testing';

import { DataCategory2Service } from './data-category2.service';

describe('DataCategory2Service', () => {
  let service: DataCategory2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCategory2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
