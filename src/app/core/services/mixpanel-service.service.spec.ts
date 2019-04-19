import { TestBed } from '@angular/core/testing';

import { MixpanelServiceService } from './mixpanel-service.service';

describe('MixpanelServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MixpanelServiceService = TestBed.get(MixpanelServiceService);
    expect(service).toBeTruthy();
  });
});
