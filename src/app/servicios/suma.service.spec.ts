import { TestBed, inject } from '@angular/core/testing';

import { SumaService } from './suma.service';

describe('SumaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SumaService]
    });
  });

  it('should be created', inject([SumaService], (service: SumaService) => {
    expect(service).toBeTruthy();
  }));
});
