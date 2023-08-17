import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechloginComponent } from './techlogin.component';

describe('TechloginComponent', () => {
  let component: TechloginComponent;
  let fixture: ComponentFixture<TechloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
