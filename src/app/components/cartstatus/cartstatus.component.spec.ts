import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartstatusComponent } from './cartstatus.component';

describe('CartstatusComponent', () => {
  let component: CartstatusComponent;
  let fixture: ComponentFixture<CartstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
