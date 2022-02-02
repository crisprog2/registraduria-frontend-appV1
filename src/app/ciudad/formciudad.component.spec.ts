import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormciudadComponent } from './formciudad.component';

describe('FormciudadComponent', () => {
  let component: FormciudadComponent;
  let fixture: ComponentFixture<FormciudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormciudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormciudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
