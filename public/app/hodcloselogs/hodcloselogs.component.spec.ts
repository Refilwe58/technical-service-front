import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodcloselogsComponent } from './hodcloselogs.component';

describe('HodcloselogsComponent', () => {
  let component: HodcloselogsComponent;
  let fixture: ComponentFixture<HodcloselogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodcloselogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodcloselogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
