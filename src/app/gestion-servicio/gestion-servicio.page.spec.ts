import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionServicioPage } from './gestion-servicio.page';

describe('GestionServicioPage', () => {
  let component: GestionServicioPage;
  let fixture: ComponentFixture<GestionServicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
