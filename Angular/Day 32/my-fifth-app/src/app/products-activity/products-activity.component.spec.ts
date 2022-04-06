import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsActivityComponent } from './products-activity.component';

describe('ProductsActivityComponent', () => {
  let component: ProductsActivityComponent;
  let fixture: ComponentFixture<ProductsActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
