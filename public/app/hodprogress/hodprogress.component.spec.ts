import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodprogressComponent } from './hodprogress.component';

describe('HodprogressComponent', () => {
  let component: HodprogressComponent;
  let fixture: ComponentFixture<HodprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodprogressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
