import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsActivityComponent } from './students-activity.component';

describe('StudentsActivityComponent', () => {
  let component: StudentsActivityComponent;
  let fixture: ComponentFixture<StudentsActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
