import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGrupoComponent } from './crear-grupo.component';
import { FormBuilder } from '@angular/forms';

describe('CrearGrupoComponent', () => {
  let component: CrearGrupoComponent;
  let fixture: ComponentFixture<CrearGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should have name and description', () => {
    

          expect(component).toBeTruthy();
  });
});
