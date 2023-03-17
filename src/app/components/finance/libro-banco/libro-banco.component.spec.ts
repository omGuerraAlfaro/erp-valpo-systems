import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroBancoComponent } from './libro-banco.component';

describe('LibroBancoComponent', () => {
  let component: LibroBancoComponent;
  let fixture: ComponentFixture<LibroBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroBancoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
