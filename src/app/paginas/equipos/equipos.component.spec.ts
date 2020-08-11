import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposComponent } from './equipos.component';
import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';
import { FormBuilder } from '@angular/forms';

describe('EquiposComponent', () => {
  let component: EquiposComponent;
  let fixture: ComponentFixture<EquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();



    it('should have name and description', () => {
    



      expect(component).toBeTruthy();
    });
  });
});
