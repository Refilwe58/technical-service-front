import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminassigntaskComponent } from './adminassigntask.component';

describe('AdminassigntaskComponent', () => {
  let component: AdminassigntaskComponent;
  let fixture: ComponentFixture<AdminassigntaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminassigntaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminassigntaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
