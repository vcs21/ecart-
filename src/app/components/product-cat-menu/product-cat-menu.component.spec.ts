import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatMenuComponent } from './product-cat-menu.component';

describe('ProductCatMenuComponent', () => {
  let component: ProductCatMenuComponent;
  let fixture: ComponentFixture<ProductCatMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCatMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
