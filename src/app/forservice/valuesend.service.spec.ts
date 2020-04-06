import { TestBed } from '@angular/core/testing';

import { ValuesendService } from './valuesend.service';

describe('ValuesendService', () => {
  let service: ValuesendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValuesendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
