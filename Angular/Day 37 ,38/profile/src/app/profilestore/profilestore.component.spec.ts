import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilestoreComponent } from './profilestore.component';

describe('ProfilestoreComponent', () => {
  let component: ProfilestoreComponent;
  let fixture: ComponentFixture<ProfilestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilestoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
