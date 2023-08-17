import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodSageComponent } from './hod-sage.component';

describe('HodSageComponent', () => {
  let component: HodSageComponent;
  let fixture: ComponentFixture<HodSageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodSageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodSageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
