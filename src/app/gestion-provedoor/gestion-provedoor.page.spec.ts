import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionProvedoorPage } from './gestion-provedoor.page';

describe('GestionProvedoorPage', () => {
  let component: GestionProvedoorPage;
  let fixture: ComponentFixture<GestionProvedoorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionProvedoorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
