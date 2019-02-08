import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegistrationDetailComponent } from './event-registration-detail.component';

describe('EventRegistrationDetailComponent', () => {
  let component: EventRegistrationDetailComponent;
  let fixture: ComponentFixture<EventRegistrationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRegistrationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRegistrationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
