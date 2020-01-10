import { TestBed } from '@angular/core/testing';

import { AddScheduleService } from './add-schedule.service';

describe('AddScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddScheduleService = TestBed.get(AddScheduleService);
    expect(service).toBeTruthy();
  });
});
