import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mdf2DemoComponent } from './mdf2-demo.component';

describe('Mdf2DemoComponent', () => {
  let component: Mdf2DemoComponent;
  let fixture: ComponentFixture<Mdf2DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mdf2DemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mdf2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
