import { TestBed } from '@angular/core/testing';

import { TextCorrectionService } from './text-correction.service';

describe('TextCorrectionService', () => {
  let service: TextCorrectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextCorrectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
