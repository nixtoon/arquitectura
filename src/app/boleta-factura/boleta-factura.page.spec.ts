import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoletaFacturaPage } from './boleta-factura.page';

describe('BoletaFacturaPage', () => {
  let component: BoletaFacturaPage;
  let fixture: ComponentFixture<BoletaFacturaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoletaFacturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
