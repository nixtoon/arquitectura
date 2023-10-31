import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionPedidosPage } from './gestion-pedidos.page';

describe('GestionPedidosPage', () => {
  let component: GestionPedidosPage;
  let fixture: ComponentFixture<GestionPedidosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionPedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
