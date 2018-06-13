import { TestBed, inject } from '@angular/core/testing';

import { TwitterMessageService } from '../services/twitter-message.service';

describe('TwitterMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterMessageService]
    });
  });

  it('should be created', inject([TwitterMessageService], (service: TwitterMessageService) => {
    expect(service).toBeTruthy();
  }));
});
