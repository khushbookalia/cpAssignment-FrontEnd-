import { TestBed, inject } from '@angular/core/testing';

import { CommonPrtcService } from './common-prtc.service';

describe('CommonPrtcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonPrtcService]
    });
  });

  it('should be created', inject([CommonPrtcService], (service: CommonPrtcService) => {
    expect(service).toBeTruthy();
  }));
});
