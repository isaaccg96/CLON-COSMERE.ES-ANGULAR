import { TestBed } from '@angular/core/testing';

import { ArchivoTormentasService } from './archivo-tormentas.service';

describe('ArchivoTormentasService', () => {
  let service: ArchivoTormentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivoTormentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
