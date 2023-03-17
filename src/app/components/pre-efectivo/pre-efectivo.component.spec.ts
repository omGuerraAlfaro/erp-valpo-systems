import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreEfectivoComponent } from './pre-efectivo.component';

describe('PreEfectivoComponent', () => {
  let component: PreEfectivoComponent;
  let fixture: ComponentFixture<PreEfectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreEfectivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
