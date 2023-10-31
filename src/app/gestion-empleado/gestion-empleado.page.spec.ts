import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionEmpleadoPage } from './gestion-empleado.page';

describe('GestionEmpleadoPage', () => {
  let component: GestionEmpleadoPage;
  let fixture: ComponentFixture<GestionEmpleadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionEmpleadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
