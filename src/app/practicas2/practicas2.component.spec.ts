import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practicas2Component } from './practicas2.component';

describe('Practicas2Component', () => {
  let component: Practicas2Component;
  let fixture: ComponentFixture<Practicas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practicas2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practicas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
