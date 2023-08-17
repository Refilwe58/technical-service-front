import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StafffeedbackComponent } from './stafffeedback.component';

describe('StafffeedbackComponent', () => {
  let component: StafffeedbackComponent;
  let fixture: ComponentFixture<StafffeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StafffeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StafffeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
