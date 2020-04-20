import { TestBed } from '@angular/core/testing';

import { JsonServerService } from './json-server.service';

describe('JsonServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonServerService = TestBed.get(JsonServerService);
    expect(service).toBeTruthy();
  });
});
