import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionInformePage } from './gestion-informe.page';

describe('GestionInformePage', () => {
  let component: GestionInformePage;
  let fixture: ComponentFixture<GestionInformePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionInformePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
