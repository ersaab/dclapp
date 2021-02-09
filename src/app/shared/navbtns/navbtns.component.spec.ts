import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbtnsComponent } from './navbtns.component';

describe('NavbtnsComponent', () => {
  let component: NavbtnsComponent;
  let fixture: ComponentFixture<NavbtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
