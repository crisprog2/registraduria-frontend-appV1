import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActualizarCiudadComponent } from './form-actualizar-ciudad.component';

describe('FormActualizarCiudadComponent', () => {
  let component: FormActualizarCiudadComponent;
  let fixture: ComponentFixture<FormActualizarCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormActualizarCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActualizarCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
