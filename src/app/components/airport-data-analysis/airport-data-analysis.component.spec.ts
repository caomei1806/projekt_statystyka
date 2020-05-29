import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportDataAnalysisComponent } from './airport-data-analysis.component';

describe('AirportDataAnalysisComponent', () => {
  let component: AirportDataAnalysisComponent;
  let fixture: ComponentFixture<AirportDataAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportDataAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportDataAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
