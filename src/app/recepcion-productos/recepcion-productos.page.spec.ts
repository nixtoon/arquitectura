import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecepcionProductosPage } from './recepcion-productos.page';

describe('RecepcionProductosPage', () => {
  let component: RecepcionProductosPage;
  let fixture: ComponentFixture<RecepcionProductosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecepcionProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
