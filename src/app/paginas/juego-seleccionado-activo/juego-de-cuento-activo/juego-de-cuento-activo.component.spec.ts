import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDeCuentoActivoComponent } from './juego-de-cuento-activo.component';

describe('JuegoDeCuentoActivoComponent', () => {
  let component: JuegoDeCuentoActivoComponent;
  let fixture: ComponentFixture<JuegoDeCuentoActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoDeCuentoActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDeCuentoActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
