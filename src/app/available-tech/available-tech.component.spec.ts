import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTechComponent } from './available-tech.component';

describe('AvailableTechComponent', () => {
  let component: AvailableTechComponent;
  let fixture: ComponentFixture<AvailableTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
