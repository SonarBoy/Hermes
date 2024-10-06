import { TestBed } from '@angular/core/testing';

import { TableBroadcasterService } from './table-broadcaster.service';

describe('TableBroadcasterService', () => {
  let service: TableBroadcasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableBroadcasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
