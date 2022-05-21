import { TestBed } from '@angular/core/testing';

import { NgxAchlmwService } from './ngx-achlmw.service';

describe('NgxAchlmwService', () => {
  let service: NgxAchlmwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAchlmwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
