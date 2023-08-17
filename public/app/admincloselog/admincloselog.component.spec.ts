import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincloselogComponent } from './admincloselog.component';

describe('AdmincloselogComponent', () => {
  let component: AdmincloselogComponent;
  let fixture: ComponentFixture<AdmincloselogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincloselogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincloselogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
