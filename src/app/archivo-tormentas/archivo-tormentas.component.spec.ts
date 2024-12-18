import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoTormentasComponent } from './archivo-tormentas.component';

describe('ArchivoTormentasComponent', () => {
  let component: ArchivoTormentasComponent;
  let fixture: ComponentFixture<ArchivoTormentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivoTormentasComponent]
    });
    fixture = TestBed.createComponent(ArchivoTormentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
