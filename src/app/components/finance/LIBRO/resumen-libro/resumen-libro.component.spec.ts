import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenLibroComponent } from './resumen-libro.component';

describe('ResumenLibroComponent', () => {
  let component: ResumenLibroComponent;
  let fixture: ComponentFixture<ResumenLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
