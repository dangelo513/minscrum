import { TestBed } from '@angular/core/testing';

import { ScrumcardsService } from './scrumcards.service';

describe('ScrumcardsService', () => {
  let service: ScrumcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrumcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
