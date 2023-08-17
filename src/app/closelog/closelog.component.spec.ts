import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloselogComponent } from './closelog.component';

describe('CloselogComponent', () => {
  let component: CloselogComponent;
  let fixture: ComponentFixture<CloselogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloselogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloselogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
