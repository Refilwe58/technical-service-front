import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefConfirmFormComponent } from './ref-confirm-form.component';

describe('RefConfirmFormComponent', () => {
  let component: RefConfirmFormComponent;
  let fixture: ComponentFixture<RefConfirmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefConfirmFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefConfirmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
