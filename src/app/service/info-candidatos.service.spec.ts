import { TestBed } from '@angular/core/testing';

import { InfoCandidatosService } from './info-candidatos.service';

describe('InfoCandidatosService', () => {
  let service: InfoCandidatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoCandidatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
