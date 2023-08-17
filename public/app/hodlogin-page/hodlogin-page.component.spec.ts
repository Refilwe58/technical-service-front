import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HODloginPageComponent } from './hodlogin-page.component';

describe('HODloginPageComponent', () => {
  let component: HODloginPageComponent;
  let fixture: ComponentFixture<HODloginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HODloginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HODloginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
