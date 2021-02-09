import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileQuesComponent } from './profile-ques.component';

describe('ProfileQuesComponent', () => {
  let component: ProfileQuesComponent;
  let fixture: ComponentFixture<ProfileQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileQuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
