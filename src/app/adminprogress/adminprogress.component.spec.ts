import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprogressComponent } from './adminprogress.component';

describe('AdminprogressComponent', () => {
  let component: AdminprogressComponent;
  let fixture: ComponentFixture<AdminprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminprogressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
