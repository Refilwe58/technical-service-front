import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackformComponent } from './trackform.component';

describe('TrackformComponent', () => {
  let component: TrackformComponent;
  let fixture: ComponentFixture<TrackformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
