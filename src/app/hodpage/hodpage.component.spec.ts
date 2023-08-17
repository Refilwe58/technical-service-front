import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HODpageComponent } from './hodpage.component';

describe('HODpageComponent', () => {
  let component: HODpageComponent;
  let fixture: ComponentFixture<HODpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HODpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HODpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
