import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFacturaComponent } from './category-factura.component';

describe('CategoryFacturaComponent', () => {
  let component: CategoryFacturaComponent;
  let fixture: ComponentFixture<CategoryFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
