import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportameComponent } from './reportame.component';

describe('ReportameComponent', () => {
  let component: ReportameComponent;
  let fixture: ComponentFixture<ReportameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
