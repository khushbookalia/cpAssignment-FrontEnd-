import { TestBed, inject } from '@angular/core/testing';

import { CommonOrgsService } from './common-orgs.service';

describe('CommonOrgsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonOrgsService]
    });
  });

  it('should be created', inject([CommonOrgsService], (service: CommonOrgsService) => {
    expect(service).toBeTruthy();
  }));
});
