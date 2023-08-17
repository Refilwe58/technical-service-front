import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsendrequestComponent } from './staffsendrequest.component';

describe('StaffsendrequestComponent', () => {
  let component: StaffsendrequestComponent;
  let fixture: ComponentFixture<StaffsendrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffsendrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffsendrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
