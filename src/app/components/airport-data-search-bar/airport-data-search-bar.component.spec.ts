import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportDataSearchBarComponent } from './airport-data-search-bar.component';

describe('AirportDataSearchBarComponent', () => {
  let component: AirportDataSearchBarComponent;
  let fixture: ComponentFixture<AirportDataSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportDataSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportDataSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
