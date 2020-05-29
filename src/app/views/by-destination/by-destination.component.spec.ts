import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDestinationComponent } from './by-destination.component';

describe('ByDestinationComponent', () => {
  let component: ByDestinationComponent;
  let fixture: ComponentFixture<ByDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
